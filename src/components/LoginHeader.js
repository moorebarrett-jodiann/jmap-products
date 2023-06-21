import OpenLoginButton from "./OpenLoginButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../config/firebase";
import { useEffect, useState } from "react";


function LoginHeader() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Cart')));
  const [user] = useAuthState(auth);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('Cart')));
  });
  return (
    <div className="d-flex">
      {
        user === null ? 
        <OpenLoginButton classes="btn" value="Login" />
        : 
        <div className="d-flex h-100 align-items-center">
          <div className="welcome text-muted mx-3">
            <p>Welcome <span>{user.email}</span></p>
          </div>
          <div>
            <i className="fa-solid fa-cart-shopping mx-3"></i>
            <span>{items.length}</span>
          </div>
          <button onClick={logout}>Logout</button>
        </div>
      }
    </div>
  )
}

export default LoginHeader;