
import { createContext, useReducer, useEffect } from "react";

// Create the initial state of the local storage which is either a Cart of items or, if null, an empty array
const initialState = {
    cartItems: JSON.parse(localStorage.getItem("Cart")) || [],
};
  
// Initialize reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                cartItems: [action.item, ...state.cartItems]
            };
        // additional cases go here
        default:
            return state;
    }
};

// Create the context
export const CartContext = createContext();

// Create the CartProvider component
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