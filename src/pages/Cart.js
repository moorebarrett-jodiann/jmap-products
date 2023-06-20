import '../stylesheet/cart.css';

function Cart() {
  return (
    <section className="main-container cart-container">
        <div className="columns-container">
            <div className="first-col-container">
                <div className="membership-container rounded">
                    <article>
                        <a href="" className="heading-link"><h2>Free Shipping for Members</h2></a>
                        <p>
                            Become a member today and get discounts,
                            free shipping and so much more!
                        </p>
                    </article>
                </div>

                <article>
                    <h2>Your item(s)</h2>
                </article>

                {/* ITEMS CONTAINER */}
                <div className="item-cards-container">
                    {/* INDIVIDUAL ITEM CARD */}
                    <div className="item-card rounded">
                        <div className="item-card-info">
                            <figure>
                                <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                                alt="Product image goes here"/>
                            </figure>

                            <article>
                                <h2>Product Title</h2>
                                <p>Product Rating</p>
                                <p>Product Quantity</p>
                                <div>
                                    <a href="">
                                    <i className="fa-solid fa-heart"></i> Add to Favorites 
                                    </a>
                                    <a href="">
                                        <i className="fa-solid fa-trash-can"></i> Remove 
                                    </a>
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
                                <img src=	"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
                                alt="Product image goes here"/>
                            </figure>

                            <article>
                                <h2>Product Title</h2>
                                <p>Product Rating</p>
                                <p>Product Quantity</p>
                                <div>
                                    <a href="">
                                        <i className="fa-solid fa-heart"></i> Add to Favorites 
                                    </a>
                                    <a href="">
                                        <i className="fa-solid fa-trash-can"></i> Remove 
                                    </a>
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
                        checkout. <a href="" className="blue">Learn more</a>
                    </p>
                </article>

                <div>
                    <article>
                        <h2>You may also like</h2>
                    </article>

                    <div>
                        {/* A carousel of other items */}
                    </div>
                </div>
            </div>

            <div className="second-col-container">
                {/* SECOND COLUMN */}
                <div>
                    <article>
                        <h2>
                        <i class="fa-solid fa-cart-shopping"></i> Order Summary
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
                    <i className="fa-brands fa-cc-visa"></i>
                    <i className="fa-brands fa-cc-paypal"></i>
                    <i className="fa-brands fa-cc-mastercard"></i>
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