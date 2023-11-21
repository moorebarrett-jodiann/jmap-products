import React, { useState, useEffect } from 'react';
import LoginHeader from "./LoginHeader";

function Header(props) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
        if (!event.target.closest('.menu') && !event.target.closest('.menu-toggle')) {
            setIsOpen(false);
        }
        };

        if (isOpen) {
        document.addEventListener('click', handleOutsideClick);
        }

        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return(
        <header>
            <div className="main-container flexbox">
                <a href="/" className="title flexbox">
                    <img src={props.url} alt="logo"/>
                    <h1>JMAP</h1>
                </a>
                <nav className="horizontal">
                    <ul>
                        <li><a href='/'>Products</a></li>
                        <li><a href='/about-us'>About Us</a></li>
                    </ul>
                </nav>
                <nav className="vertical">
                    <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <div className="menu-icon"></div>
                    </div>
                    <ul className={`menu ${isOpen ? 'open' : ''}`}>
                        <li onClick={closeMenu}><a href="/">Products</a></li>
                        <li onClick={closeMenu}><a href="/about-us">About Us</a></li>
                    </ul>
                </nav>
                <LoginHeader/>
                {/* <div className="burger-menu"><i className="fa-solid fa-bars"></i></div> */}
            </div>
        </header>
    );
}


export default Header;