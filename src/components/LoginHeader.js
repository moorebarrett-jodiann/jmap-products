import OpenLoginButton from "./OpenLoginButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../config/firebase";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from 'react-router-dom';

function LoginHeader() {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const { state } = useContext(CartContext); // Access cart state from CartContext

	// this will be our variable to hold a copy of the current cart items
	const [items, setItems] = useState([]);

	// function that will copy the local storage array of items into our variable
	// if the local storage is null we will set our variable to an empty array
	const updateCartCount = () => {
		setItems(state.cartItems || []);
	};

	// in the use effect, watch for changes in the carts 'state' to trigger an update on the count value
	useEffect(() => {
		updateCartCount();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.cartItems]); 

	const goToCart = () => {
		navigate("/my-cart");
	}
	
	return (
	<div className="d-flex">
		<div className="d-flex h-100 align-items-center">
		{
			user === null ? 
			<OpenLoginButton classes="login-logout" value="Login" />
			: 
			<>
				<div className="welcome text-muted">
					<p>Welcome <span>{user.email}</span></p>
				</div>
				<a href="#!" onClick={goToCart} className="cart-header">
					<i className="fa-solid fa-cart-shopping"></i>
					<span>{items.length}</span>
				</a>
				<button className="login-logout" onClick={logout}>Logout</button>
			</>			
		}
		</div>
	</div>
	)
}

export default LoginHeader;