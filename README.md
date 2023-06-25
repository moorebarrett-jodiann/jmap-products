<div align="center"><img style="display: inline;" src="./src/images/companyLogo.png" alt="logo" width="50">
    <h1 style="color: #db9806; font-size: 30px; display: inline; position:relative; bottom: 10px;">JMAP Products</h1>
</div>

### Table of contents
- 🌐 [Visit Page](https://jmap-products.vercel.app/) 🌐
- [Description](#description)
- [Functionalities](#functionalities)
- [Key Technologies](#key-technologies)

### Description

<p style="color: #db9806; font-size: 20px; font-weight: 600; display: inline;">JMAP</p> is a minimal-functioning single-page e-commerce web application, built using the following technologies:

- [React Pages](https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.html)
- [React Hooks](https://legacy.reactjs.org/docs/hooks-intro.html)
- [User Authentication with Firebase](https://firebase.google.com/docs/auth)
- [CSS Layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [React Form Hooks](https://www.react-hook-form.com/)
- [React Context API](https://www.freecodecamp.org/news/context-api-in-react/)
- [React Helmet Async](https://www.npmjs.com/package/react-helmet-async)
- [React Axios](https://www.npmjs.com/package/react-axios)
- [EmailJS](https://www.emailjs.com/)

![JMAP](./src/images/screenshots/jmap.png?raw=true "JMAP Products")

### Functionalities

The website contains a guest/logged-in user 'shopping' experience with it's inventory of items populated from the [Fake Store API](https://fakestoreapi.com/)

##### :label: As a Guest

A 'guest' is a user who is not considered logged in with an active account with the web application.

As a guest, a user will only be able to perform the following activities:

- View item details on the home page
- Filter items by their respective categories
- Interact with the newsletter registration form in the website footer. This form will trigger an simple "Thank You for registering" email that will be sent to the email provided in the form.
- View item details per item
- View About Us page
- Log In

##### :label: As a Logged in User

A 'logged-in user' is a user who has registered for the website using their email and password, logged into the website using an existing account registered with an email/password combination, or logged into the website using the "Login with Gmail" feature.

A logged-in user will be able to carry out the same features as a guest user, in addition the the following activities:

- Add items from the homepage to their shopping cart
- Add items from the item details page to their shopping cart
- Remove unwanted items from their shopping cart
- Checkout the items in their cart by placing an order
- Receive an order confirmation email to the email used to register for the website

### Key Technologies
[(Back to top)](#table-of-contents)

##### :label: Axios

[Axios](https://www.npmjs.com/package/react-axios) is a lightweight HTTP client based on the $http service within Angular.js v1.x and is similar to the native [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

Axios is promise-based, which gives you the ability to take advantage of JavaScript’s async and await for more readable asynchronous code

``` javascript
// fetch all fake store products 
    import { useState, useEffect } from 'react';
    import axios from 'axios';

    const API_URL = 'https://fakestoreapi.com/products';
    const [message, setMessage] = useState("Loading products ...");
    const [sortedItems, setSortedItems] = useState([]);

    useEffect(() => {
        axios
            .get(API_URL)
            .then(result => {
                setItems(result.data);
            })
            .catch(error => {
                setMessage('No products found ...');
            });
    }, []);
```

##### :label: Firebase SDK Authentication
[(Back to top)](#table-of-contents)

As mentioned earlier, there are 2 methods of registration/authentication implemented in JMAP Products:

- **Login with Email and Password**

Authenticate users with their email addresses and passwords. The Firebase Authentication SDK provides methods to create and manage users that use their email addresses and passwords to sign in. Firebase Authentication also handles sending password reset emails.

- **Login with Gmail (Federated identity provider integration)**

Authenticate users by integrating with federated identity providers. The Firebase Authentication SDK provides methods that allow users to sign in with their Google, Facebook, Twitter, and GitHub accounts.

Using Node.js, you can setup your application to use firebase by running 

`npm install firebase`

After the package has installed, create a `config` folder with a `firebase.js` file and add the below snippet yto your file. You will substitue your own config properties based on your firebase account setup.

```` javascript 
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';

const firebaseConfig = {
    // add your own config properties here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// auth functions

const logInWithEmailAndPassword = async (email, password) => {
    try {
        const credential = await signInWithEmailAndPassword(auth, email, password);
        return credential;
    } catch (error) {
        console.error(error)
    }
}

const registerWithEmailAndPassword = async ( email, password) => {
    try {
        const credential = await createUserWithEmailAndPassword(auth, email, password);
        return credential;
    } catch (error) {
        console.error(error);
    }
}

const logInWithGoogle = async () => {
    try {
        console.log("Google");
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error(error);
    }
}

const logout = () => {
    signOut(auth);
}

export {
    auth,
    logInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
};
````

##### :label: React Context API
[(Back to top)](#table-of-contents)

React provides a built-in feature known as the context API that helps  “teleport” data to the components that need it without passing props.

In many cases, passing props can be an effective way to share data between different parts of your application. But passing props down a chain of multiple components to reach a specific component can make your code overly cumbersome.

Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.

JMAP PRoducts used a Context to manage the shopping carts CRUD functionalities and allow all **children** components in the project to have access to the **state** of the cart at all times.

```` javascript

import { createContext, useReducer, useEffect } from "react";

// Initialize reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                cartItems: [action.item, ...state.cartItems]
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.guid !== action.item),
            };
        case "CLEAR_CART":
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
};

// Create the context
export const CartContext = createContext();

/**
 * Create the CartProvider component that will consider the state of the main datahouse.
 * It's important to note that the Provider component should be wrapped around the top-level
 * component in an application to ensure that all child components have access to the shared
 * data.
 * */
export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, { cartItems: JSON.parse(localStorage.getItem("Cart")) || [] });

    useEffect(() => {
		localStorage.setItem('Cart', JSON.stringify(state.cartItems));
	}, [state.cartItems]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
````

#### References

- [Redux Vs Context API](https://dev.to/ruppysuppy/redux-vs-context-api-when-to-use-them-4k3p)
- [Firebase npm](https://www.npmjs.com/package/@firebase/auth)
- [EmailJS](https://www.emailjs.com/docs/)
- [Handling User Auth with Firebase](https://blog.logrocket.com/user-authentication-firebase-react-apps/)
