import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductCards from "../components/ProductCards";

function Cart() {
  const API_URL = 'https://fakestoreapi.com/products?limit=4';
  const [randomProducts, setRandomProducts] = useState([]);
  const navigate = useNavigate();
  
  const handleClick = (item) => {
    navigate(`/product/${item.id}`); 
  };

  useEffect(() => {
    axios
        .get(API_URL)
        .then(result => {
            setRandomProducts(result.data);
        })
        .catch(error => {
            console.log(error);
        });
    
  }, []);  

  return (
    <section className="main-container cart-container">
        <div className="columns-container">
            <div className="first-col-container">
                <div className="membership-container rounded">
                    <article>
                        <a href="" className="heading-link"><h4>Free Shipping for Members</h4></a>
                        <p>
                            Become a member today and get discounts,
                            free shipping and so much more!
                        </p>
                    </article>
                </div>

                <article>
                    <h4>Your item(s)</h4>
                </article>

                {/* ITEMS CONTAINER */}
                <div className="item-cards-container">
                    {/* INDIVIDUAL ITEM CARD */}
                    <div className="item-card rounded">
                        <div className="item-card-info">
                            <figure>
                                <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                                alt="Product img goes here"/>
                            </figure>

                            <article>
                                <h4>Product Title</h4>
                                <p>Product Rating</p>
                                <p>Product Quantity</p>
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
                            <h3>$0.00</h3>
                        </article>
                    </div>

                    <div className="item-card rounded">
                        <div className="item-card-info">
                            <figure>
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
                                alt="Product img goes here"/>
                            </figure>

                            <article>
                                <h4>Product Title</h4>
                                <p>Product Rating</p>
                                <p>Product Quantity</p>
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
                            <h3>$0.00</h3>
                        </article>
                    </div>
                </div>

                <article>
                    <p>
                        If this order contains a gift,
                        you'll be able to add a message and 
                        a special gift box during 
                        checkout. <span className="blue dead-link">Learn more</span>
                    </p>
                </article>

                <div>
                    <article>
                        <h4>You may also like</h4>
                    </article>

                    <div className="product-grid">
                        <ProductCards 
                            items={randomProducts}
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>

            <div className="second-col-container">
                {/* SECOND COLUMN */}
                <div>
                    <article>
                        <h2>
                        <i className="fa-solid fa-cart-shopping"></i> Order Summary
                        </h2>
                    </article>
                </div>
                
                <form>
                    <input type="text" placeholder="POSTAL CODE"/>
                    <input type="submit" value="SEARCH"/>
                </form>

                <hr/>

                <div className="order-summary-container">
                    <article>
                        <p>Product Subtotal</p>
                        <p>$0.00</p>
                    </article>

                    <article>
                        <p>Order Discounts</p>
                        <p className="text-danger">-$0.00</p>
                    </article>

                    <article>
                        <p>Estimated Shipping</p>
                        <p>Free</p>
                    </article>

                    <article>
                        <p>Estimated Taxes</p>
                        <p>$0.00</p>
                    </article>

                    <form className="">
                        <input type="text" placeholder="ENTER PROMO CODE"/>
                        <input type="submit" value="SUBMIT"/>
                    </form>
                </div>

                <hr/>

                <div className="estimated-total-container">
                    <article>
                        <p>Estimated Total</p>
                        <p>$0.00</p>
                    </article>
                </div>

                <hr/>

                <div>
                    <p>Ready to order?</p>
                    <button className="place-order-btn">Place Order</button>
                </div>

                <div className="payment-options-container">
                    <figure>
                        <img src="./images/visaLogo.png" 
                        alt="Visa Logo"/>
                    </figure>

                    <figure>
                        <img src="./images/mastercardLogo.png" 
                        alt="Mastercard Logo"/>
                    </figure>

                    <figure>
                        <img src="./images/paypalLogo.png" 
                        alt="Paypal Logo"/>
                    </figure>
                </div>
            </div>
        </div>
        
        <div className="shipping-features-container">
            <article>
                <i className="fa-solid fa-truck-fast blue"></i>
                <h5>Fast Delivery</h5>
            </article>

            <article>
                <i className="fa-solid fa-truck-ramp-box blue"></i>                
                <h5>Free shipping over $35</h5>
            </article>

            <article>
                <i className="fa-solid fa-hand-holding-dollar blue"></i>
                <h5>Guaranteed low prices</h5>
            </article>

            <article>
                <i className="fa-solid fa-award blue"></i>
                <h5>Quality products</h5>
            </article>
        </div>
    </section>
  )
}

export default Cart;