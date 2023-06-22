import LoginHeader from "./LoginHeader";

function Header(props) {
    return(
        <header>
            <div className="main-container flexbox">
                <a href="/jmap-products" className="title flexbox">
                    <img src={props.url} alt="logo"/>
                    <h1>JMAP</h1>
                </a>
                <nav>
                    <ul>
                        <li><a href='/jmap-products'>Products</a></li>
                        <li><a href='/jmap-products/about-us'>About Us</a></li>
                    </ul>
                </nav>
                <LoginHeader/>
                <div className="burger-menu"><i className="fa-solid fa-bars"></i></div>
            </div>
        </header>
    );
}


export default Header;