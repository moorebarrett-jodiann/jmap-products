import Stars from "./Stars";
import '../stylesheet/index.css';
import { useState, useEffect } from "react";

function ProductCheckoutCard(props) {
  return (
    <div className="item-card rounded" key={props.ID}>
        <div className="item-card-info">
            <figure>
                <img src={props.IMAGE}
                alt="Product img goes here"/>
            </figure>

            <article className="product-info-details">
                <h4 className="product-title">{props.TITLE}</h4>
                <div className="checkoutCardRatingContainer">
                    <Stars rating={props.RATING} />
                    <span className="count">({props.COUNT})</span>
                </div>
                <div className="dead-links">
                    <p className="dead-link-1">
                        <i className="fa-solid fa-heart"></i> Add to Favorites 
                    </p>
                    <p onClick={() => props.RemoveFunction(props.ID)} className="dead-link">
                        <i className="fa-solid fa-trash-can"></i> Remove 
                    </p>
                </div>
            </article>
        </div>
        
        <article className="product-price">
            <h3>${props.PRICE}</h3>
        </article>
    </div>
  )
}

export default ProductCheckoutCard