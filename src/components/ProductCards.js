import { useState } from "react";
import AddToCartAlert from "./AddToCartAlert";
import Stars from "./Stars";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import OpenLoginButton from "./OpenLoginButton";


function ProductCards(props) {
    const [alertIsShown, setAlertIsShown] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    
    const formatPrice = (price) => {
        const dollars = Math.floor(price);
        const cents = (price - dollars).toFixed(2).slice(2);
        return {
          dollars,
          cents
        };
    };

    const addItem = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setAlertIsShown(true);

        setTimeout(() => {
            setAlertIsShown(false);
        }, 2000);
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
                            <OpenLoginButton value="Add to Cart" classes={"add-to-cart"} />
                            :
                            <button onClick={addItem} className="add-to-cart">Add to Cart</button>
                        }
                    </div>      
                </div>
            ))}
        </>
    )
}

export default ProductCards
