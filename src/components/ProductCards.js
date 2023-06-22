import { useState, useEffect, useContext } from "react";
import AddToCartAlert from "./AddToCartAlert";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import Stars from "./Stars";
import { CartContext } from '../context/CartContext';

function ProductCards(props) {
    const [user] = useAuthState(auth);
    const { state, dispatch } = useContext(CartContext);

    const formatPrice = (price) => {
        const dollars = Math.floor(price);
        const cents = (price - dollars).toFixed(2).slice(2);
        return {
            dollars,
            cents
        };
    };
    
    const [alertIsShown, setAlertIsShown] = useState(false);
    
    const addItem = (event, item) => {
        event.preventDefault();
        event.stopPropagation();

        if(user !== null) {
            // Show Alert
            setAlertIsShown(true);

            setTimeout(() => {
                setAlertIsShown(false);
            }, 2000);

            let guid = crypto.randomUUID().substring(0, 8);

            const newItem = { 
                guid: guid,
                id: item.id, 
                image: item.image, 
                title: item.title,
                rating: item.rating.rate,
                count: item.rating.count,
                price: formatPrice(item.price).dollars + '.' +
                formatPrice(item.price).cents
            };

            // Dispatch the ADD_ITEM action to add the item to the cart
            dispatch({ type: "ADD_ITEM", item: newItem });

        } else {
            // SHOW LOGIN MODAL
            console.log('User not logged in')
        }
    };

    return (
        <>
            <AddToCartAlert 
                isShown={alertIsShown}
            />
            {props.items.map(item => (
                <div className="product-card" key={item.id} onClick={() => props.onClick(item)}>
                    <div className="favourite"><i className="fa-solid fa-heart"></i></div>
                    <figure className="image-wrapper">
                        <img src={item.image} alt={item.title} />
                    </figure>
                    <div className="info-wrapper">
                        <div className="title-price flexbox">
                            <p className="title">{item.title}</p>
                            <p className="price">
                                <span className="dollar-sign">$</span>
                                <span className="dollar">{formatPrice(item.price).dollars}</span>
                                <span className="cents">{formatPrice(item.price).cents}</span>
                            </p>
                        </div>
                        <div className="reviews flexbox">
                            <Stars rating={item.rating.rate} />
                            <p className="count">({item.rating.count})</p>
                        </div>
                        {
                            user === null ?
                            <></>
                            :
                            <button onClick={(event) => {
                                addItem(event, item);                            
                            }} 
                            className="add-to-cart">Add to Cart</button>
                        }
                    </div>      
                </div>
            ))}
        </>
    )
}

export default ProductCards
