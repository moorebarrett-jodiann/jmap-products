
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
                            <ul>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Bootstrap 5</li>
                                <li>Firebase</li>
                            </ul>
                            <p>The website features functionalities of user authentication, page routing, a mocked checkout
                                system and an email confirmation for order placements.
                            </p>
                            <p>Other features include the ability to filter products on the main page by various categories
                                and explore form validation in the footer.
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