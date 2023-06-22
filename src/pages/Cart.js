import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
import ProductCards from "../components/ProductCards";
import ProductCheckoutCard from "../components/ProductCheckoutCard";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { CartContext } from "../context/CartContext";


function Cart() {

    let subTotal = 0;
    let taxAmount = 0;
    let totalWithTax = 0;
    const API_URL = 'https://fakestoreapi.com/products?limit=4';
    const { state, dispatch } = useContext(CartContext);
    const currentItemsInCart = state.cartItems;
    const [randomProducts, setRandomProducts] = useState([]);
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    
    const handleClick = (item) => {
        navigate(`/product/${item.id}`); 
    };

    const goToOrderConfirmedPage = () => {
        // Dispatch action to clear the entire cart after purchase
        dispatch({ type: "CLEAR_CART" }); 
        navigate("/order-confirmed");
    };

    const goToHome = () => {
        navigate('/')
    };

    // Getting 4 random products
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
        <>
            {loading === false && user === null ? <Navigate to="/" /> : <></> }
            <HelmetProvider>
                <Helmet>
                    <title>My Cart</title>
                </Helmet>
            </HelmetProvider>
            <>
                {currentItemsInCart.length === 0 ? (
                    <article className="empty-cart-container">
                        <h2>Your cart is empty</h2>
                        <button onClick={goToHome}>START SHOPPING</button>
                    </article>   
                    
                ):(
                    
                    <section className="main-container cart-container">
                        <div className="columns-container">
                            <div className="first-col-container">
                                <div className="membership-container rounded">
                                    <article>
                                        <a href="#!" className="heading-link"><h2>Free Shipping for Members</h2></a>
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
                                    {currentItemsInCart.map(item => {
                                        subTotal = (parseFloat(subTotal) + parseFloat(item.price)).toFixed(2);
                                        taxAmount = (subTotal * 0.13).toFixed(2);
                                        totalWithTax = (parseFloat(subTotal) + parseFloat(taxAmount)).toFixed(2);
                                        return(
                                            <ProductCheckoutCard
                                                key={item.guid}
                                                GUID={item.guid}
                                                ID={item.id}
                                                IMAGE={item.image}
                                                TITLE={item.title}
                                                RATING={item.rating}
                                                COUNT={item.count}
                                                PRICE={item.price}
                                                RedirectFunction={() => handleClick(item)}
                                                dispatch={dispatch} // Pass the dispatch function to the component
                                            />
                                        );
                                    })}
                                </div>

                                 <article>
                                    <p className="gift-text">
                                        If this order contains a gift,
                                        you'll be able to add a message and 
                                        a special gift box during
                                        checkout. <a href="#!" className="blue">Learn more</a>
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
                                
                                <form className="first-form">
                                    <input type="text" placeholder="Postal Code"/>
                                    <input type="submit" value="SEARCH"/>
                                </form>

                                <hr/>

                                <div className="order-summary-container">
                                    <article>
                                        <p>Product Subtotal</p>
                                        <p>${subTotal}</p>
                                    </article>

                                    <article>
                                        <p>Order Discounts</p>
                                        <p className="text-danger">-$8.00</p>
                                    </article>

                                    <article>
                                        <p>Estimated Shipping</p>
                                        <p>Free</p>
                                    </article>

                                    <article>
                                        <p>Estimated Taxes</p>
                                        <p>${taxAmount}</p>
                                    </article>

                                    <form>
                                        <input type="text" placeholder="Enter Promo Code"/>
                                        <input type="submit" value="SUBMIT"/>
                                    </form>
                                </div>

                                <hr/>

                                <div className="estimated-total-container">
                                    <article>
                                        <p>Estimated Total</p>
                                        <p>${(parseFloat(totalWithTax) - 8).toFixed(2)}</p>
                                    </article>
                                </div>

                                <hr/>

                                <div>
                                    <p>Ready to order?</p>
                                    <button className="place-order-btn" onClick={() => goToOrderConfirmedPage()}>Place Order</button>
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
                )}
            </>
        </>
    )
}

export default Cart;