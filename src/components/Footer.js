

function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="main-container footer">
                <div className="title flexbox">
                    <img src={props.url} alt="logo"/>
                    <h1>JMAP Products</h1>
                </div>
                <div className="social-icons">
                    <p className="copyright">Designed by JMAP &copy; {year} All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;