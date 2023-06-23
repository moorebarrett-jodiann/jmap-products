
function About() {
    return (
        <>
            <section className="main-container">
                <div className="about-container">
                    <div>
                        <h2 className="about-us-heading">About Us</h2>
                        <div className="details-wrapper">
                            <article>
                                <p><span>JMAP</span> is a simple e-commerce web application, built using the following 
                                    technologies:
                                </p>
                                <div className="lists">
                                    <ul>
                                        <li>React Pages</li>
                                        <li>User Authentication with Firebase</li>
                                        <li>useState, useEffect, useContext, useReducer Hooks</li>
                                        <li>Mock Email Confirmation</li>
                                        <li>Bootstrap 5</li>
                                        <li>CSS Layers</li>
                                        <li>React Icons</li>
                                    </ul>
                                    <ul>
                                        <li>Nice Modal (eBay)</li>
                                        <li>Context API</li>
                                        <li>Helmet</li>
                                        <li>BrowserRouter</li>
                                        <li>React Form Hooks</li>
                                        <li>Local Storage</li>
                                        <li>React Axios</li>
                                    </ul>
                                </div>
                                <p>The shoping cart CRUD functionalities are handled with a React Context Provider API that 
                                    provisions all children components with the current state of the cart, no matter
                                    which child modifies it.
                                </p>
                                <p>
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About