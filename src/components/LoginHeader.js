import OpenLoginButton from "./OpenLoginButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../config/firebase";
import { useEffect, useState } from "react";


function LoginHeader() {
	const [items, setItems] = useState(JSON.parse(localStorage.getItem('Cart')));
	const [user] = useAuthState(auth);

	useEffect(() => {
		setItems(JSON.parse(localStorage.getItem('Cart')));
	}, []);
	
	return (
		<div className="d-flex">
		{
			user === null ? 
			<OpenLoginButton classes="login-logout" value="Login" />
			: 
			<div className="d-flex h-100 align-items-center">
				<div className="welcome text-muted">
					<p>Welcome <span>{user.email}</span></p>
				</div>
				<a href="/jmap-products/my-cart" className="cart-header">
					<i className="fa-solid fa-cart-shopping"></i>
					<span>{items.length}</span>
				</a>
				<button className="login-logout" onClick={logout}>Logout</button>
			</div>
		}
		</div>
	)
}

export default LoginHeader;