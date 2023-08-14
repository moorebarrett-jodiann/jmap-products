
import { Helmet, HelmetProvider } from 'react-helmet-async';

import paul from '../images/collaborators/paul.jpg';
import matthew from '../images/collaborators/matthew.jpg';
import thelma from '../images/collaborators/thelma.jpg';
import jodi from '../images/collaborators/jodi.jpeg';

function About() {
    const paul_GITHUB = `https://github.com/Paul-Funston`;
    const thelma_GITHUB = `https://github.com/Thelma-Dev`;
    const matthew_GITHUB = `https://github.com/MattBanuag`;
    const jodi_GITHUB = `https://github.com/moorebarrett-jodiann`;

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>About Us</title>
                </Helmet>
            </HelmetProvider>
            <section className="main-container">
                <div className="about-container">
                    <div>
                        <h2 className="about-us-heading">About Us</h2>
                            <div className="collaborators">
                                <a className="collaborators-card"
                                    href={paul_GITHUB}
                                    target="_blank" rel="noreferrer" 
                                    to={paul_GITHUB}>
                                    <figure>
                                        <img src={paul} alt="Paul" />
                                        <div className="name">
                                            <p>Paul Funston</p>
                                        </div>
                                    </figure>                                        
                                </a>
                                <a className="collaborators-card"
                                    href={thelma_GITHUB}
                                    target="_blank" rel="noreferrer" 
                                    to={thelma_GITHUB}>
                                    <figure>
                                        <img src={thelma} alt="Thelma" />
                                        <div className="name">
                                            <p>Thelma Osifo</p>
                                        </div>
                                    </figure>                                        
                                </a>
                                <a className="collaborators-card"
                                    href={matthew_GITHUB}
                                    target="_blank" rel="noreferrer" 
                                    to={matthew_GITHUB}>
                                    <figure>
                                        <img src={matthew} alt="Matthew" />
                                        <div className="name">
                                            <p>Matthew Banuag</p>
                                        </div>
                                    </figure>                                        
                                </a>
                                <a className="collaborators-card"
                                    href={jodi_GITHUB}
                                    target="_blank" rel="noreferrer" 
                                    to={jodi_GITHUB}>
                                    <figure>
                                        <img src={jodi} alt="Jodi" />
                                        <div className="name">
                                            <p>Jodi-Ann Barrett</p>
                                        </div>
                                    </figure>                                        
                                </a>
                            </div>
                        <div className="details-wrapper">
                            <article>
                                <p><span>JMAP</span> is a simple e-commerce web application, built using the following 
                                    technologies:
                                </p>
                                <div className="lists">
                                    <ul>
                                        <li>Nice Modal (eBay)</li>
                                        <li>Context API</li>
                                        <li>Helmet</li>
                                        <li>BrowserRouter</li>
                                        <li>React Form Hooks</li>
                                        <li>Local Storage</li>
                                        <li>React Axios</li>
                                    </ul>
                                    <ul>
                                        <li>React Pages</li>
                                        <li>User Authentication with Firebase</li>
                                        <li>useState, useEffect, useContext, useReducer</li>
                                        <li>Mock Email Confirmation</li>
                                        <li>Bootstrap 5</li>
                                        <li>CSS Layers</li>
                                        <li>React Icons</li>
                                    </ul>                                    
                                </div>
                                <p>The shoping cart CRUD functionalities are handled with a React Context Provider API that 
                                    provisions all children components with the current state of the cart, no matter
                                    which child modifies it.
                                </p>
                                <p>Learn more about this <a href="https://github.com/moorebarrett-jodiann/jmap-products" target="_blank" rel="noreferrer"> Project</a></p>
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