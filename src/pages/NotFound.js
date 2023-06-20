import { useEffect } from "react";
import ErrorImage from '../images/404 Error-Image.png';
import { useNavigate } from "react-router-dom";

function NotFound(props) {
    const navigate = useNavigate();
  
    useEffect(() => {
      props.hideHeader()
    })
  
    const goBackHome = () => {
      props.showHeader();
      navigate('/');
    };
  
    return (
      <main>
        <div className="not-found-page">
          <div className="error-box">
            <div className="error-image">
              {/* <a href="https://storyset.com/web">Web illustrations by Storyset</a> */}
              <img src={ErrorImage} alt="Error page"/>
            </div>
            <div className="not-found-text">
              <h4>Oops! looks like you are lost</h4>
              <p>We can't find the page you are looking for</p>
              <button className="back-home" onClick={() => goBackHome()}>Go Home</button>
            </div>
          </div>
        </div>
      </main>
    )
  }
  
export default NotFound;