
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function About() {
    // const paul_GITHUB = `https://api.github.com/users/Paul-Funston`;
    // const thelma_GITHUB = `https://api.github.com/users/Thelma-Dev`;
    // const matthew_GITHUB = `https://api.github.com/users/MattBanuag`;
    // const jodi_GITHUB = `https://api.github.com/users/moorebarrett-jodiann`;
    // const token = process.env.REACT_APP_GITHUB_TOKEN;
    // const navigate = useNavigate();
    // const options = {
    //     headers: { Authorization: `"Bearer ${token}"`}
    // };

    // const [paulUserProfile, setPaulUserProfile] = useState(null);
    // const [matthewUserProfile, setMatthewUserProfile] = useState(null);
    // const [thelmaUserProfile, setThelmaUserProfile] = useState(null);
    // const [jodiUserProfile, setJodiUserProfile] = useState(null);
    // const [message, setMessage] = useState("");

    // useEffect(() => {
    //     axios.get(`${paul_GITHUB}`, options)
    //         .then(result => {
    //             console.log(result.data);
    //             setPaulUserProfile(result.data)
    //         })
    //         .catch(function (error) {
    //             setMessage('Profile not found');
    //         });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    
    // useEffect(() => {
    //     axios.get(`${thelma_GITHUB}`, options)
    //         .then(result => {
    //             console.log(result.data);
    //             setThelmaUserProfile(result.data)
    //         })
    //         .catch(function (error) {
    //             setMessage('Profile not found');
    //         });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    
    // useEffect(() => {
    //     axios.get(`${matthew_GITHUB}`, options)
    //         .then(result => {
    //             console.log(result.data);
    //             setMatthewUserProfile(result.data)
    //         })
    //         .catch(function (error) {
    //             setMessage('Profile not found');
    //         });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    
    // useEffect(() => {
    //     axios.get(`${jodi_GITHUB}`, options)
    //         .then(result => {
    //             console.log(result.data);
    //             setJodiUserProfile(result.data)
    //         })
    //         .catch(function (error) {
    //             setMessage('Profile not found');
    //         });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

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

                        {/* {(paulUserProfile && thelmaUserProfile && matthewUserProfile && jodiUserProfile) ? 
                            (
                                <div className="collaborators">
                                    <a className="collaborators-card"
                                        href={paulUserProfile.html_url}
                                        target="_blank" rel="noreferrer" 
                                        to={paulUserProfile.html_url}>
                                        <figure>
                                            <img src={paulUserProfile.avatar_url} alt={paulUserProfile.name} />
                                            <div className="name">
                                                <p>Paul Funston</p>
                                            </div>
                                        </figure>                                        
                                    </a>
                                    <a className="collaborators-card"
                                        href={thelmaUserProfile.html_url}
                                        target="_blank" rel="noreferrer" 
                                        to={thelmaUserProfile.html_url}>
                                        <figure>
                                            <img src={thelmaUserProfile.avatar_url} alt={thelmaUserProfile.name} />
                                            <div className="name">
                                                <p>Thelma Osifo</p>
                                            </div>
                                        </figure>                                        
                                    </a>
                                    <a className="collaborators-card"
                                        href={matthewUserProfile.html_url}
                                        target="_blank" rel="noreferrer" 
                                        to={matthewUserProfile.html_url}>
                                        <figure>
                                            <img src={matthewUserProfile.avatar_url} alt={matthewUserProfile.name} />
                                            <div className="name">
                                                <p>Matthew Banuag</p>
                                            </div>
                                        </figure>                                        
                                    </a>
                                    <a className="collaborators-card"
                                        href={jodiUserProfile.html_url}
                                        target="_blank" rel="noreferrer" 
                                        to={jodiUserProfile.html_url}>
                                        <figure>
                                            <img src={jodiUserProfile.avatar_url} alt={jodiUserProfile.name} />
                                            <div className="name">
                                                <p>Matthew Banuag</p>
                                            </div>
                                        </figure>                                        
                                    </a>
                                </div>
                            ) : (
                                <></>
                            )
                        } */}
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