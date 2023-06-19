

function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="container footer">
                <div className="logo">
                    <img src={props.url} alt="companyLogo"/>
                </div>
                <div className="social-icons">
                    {/* <ul>
                        <li><a href= "#!">{props.facebookLogo}</a></li>
                        <li><a href= "#!">{props.instagramLogo}</a></li>
                        <li><a href= "#!">{props.twitterLogo}</a></li>
                    </ul>    */}
                    <p className="copyright">Designed by {props.developer} &copy; {year} All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;