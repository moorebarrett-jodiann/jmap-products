import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import Stars from "./Stars";

function ProductCheckoutCard(props) {
    const { dispatch } = useContext(CartContext);

    // handle a single remove on an item in the cart
    const handleRemove = () => {
        dispatch({ type: "REMOVE_ITEM", item: props.ID });
    };

    return (
        <div className="item-card rounded" key={props.ID}>
            <div className="item-card-info">
                <figure>
                    <img src={props.IMAGE}
                    alt="Product img goes here"/>
                </figure>

                <article>
                    <h4>{props.TITLE}</h4>
                    <div className="checkoutCardRatingContainer">
                        <Stars rating={props.RATING} />
                        <span className="count">({props.COUNT})</span>
                    </div>
                    <div>
                        <p className="dead-link"  onClick={handleRemove}>
                            <i className="fa-solid fa-heart"></i> Add to Favorites 
                        </p>
                        <p className="dead-link">
                            <i className="fa-solid fa-trash-can"></i> Remove 
                        </p>
                    </div>
                </article>
            </div>
            
            <article>
                <h3>${props.PRICE}</h3>
            </article>
        </div>
    )
}

export default ProductCheckoutCard