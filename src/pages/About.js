
function About() {
    return (
        <>
            <section className="about-container">
                <div className="main-container">
                    <h2 className="about-us-heading">About Us</h2>
                    <div className="details-wrapper">
                        <article>
                            <p><span>JMAP</span> is a simple e-commerce web application, built using the following 
                                technologies:
                            </p>
                            <div className="flexbox">
                                <ul>
                                    <li>React Pages</li>
                                    <li>User Authentication with Firebase</li>
                                    <li>useState, useEffect, useContext Hooks</li>
                                    <li>Context API</li>
                                    <li>Bootstrap 5</li>
                                </ul>
                                <ul>
                                    <li>Helmet</li>
                                    <li>BrowserRouter</li>
                                    <li>React Form Hook</li>
                                    <li>Local Storage</li>
                                    <li>React Axios</li>
                                </ul>
                            </div>
                            <p>The shoping cart CRUD functionalities is handled with a React Context Provider API that 
                                provisions all children components with the current state of the cart, no matter
                                which child modifies it.
                            </p>
                            <p>
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About