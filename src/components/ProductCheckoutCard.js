import Stars from "./Stars";
import '../stylesheet/index.css';

function ProductCheckoutCard(props) {
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
                    <p className="dead-link">
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