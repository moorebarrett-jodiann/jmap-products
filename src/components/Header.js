import LoginHeader from "./LoginHeader";

function Header() {
    return(
        <header>
            <div className="main-container flexbox">
                <div className="title"><h1>Jmap</h1></div>
                <nav>
                    <ul>
                        <li><a href='#!'>Products</a></li>
                        <li><a href='#!'>About Us</a></li>
                        <li><LoginHeader/></li>
                    </ul>
                </nav>
                <div className="burger-menu"><i className="fa-solid fa-bars"></i></div>
            </div>
        </header>
    );

}


export default Header;