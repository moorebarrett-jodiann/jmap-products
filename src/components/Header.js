import LoginHeader from "./LoginHeader";

function Header() {
    return(
        <header>
            <div className="container flexbox">
                <div className="title"><h1>Jmap</h1></div>
                <nav>
                    <ul>
                        <li><a href='#!'>Products</a></li>
                        <li><a href='#!'>About Us</a></li>
                        <li><LoginHeader/></li>
                    </ul>
                </nav>
                <div className="hamburger-menu">
                    <input id="menu-toggle" type="checkbox" />
                    <label className="menu-btn" htmlFor="menu-toggle">
                        <span></span>
                    </label>
                </div>
            </div>
        </header>
    );

}


export default Header;