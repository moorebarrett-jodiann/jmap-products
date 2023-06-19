

function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="main-container footer">
                <div className="logo">
                    <img src={props.url} alt="companyLogo"/>
                </div>
                <div className="social-icons">
                    <p className="copyright">Designed by {props.developer} &copy; {year} All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;