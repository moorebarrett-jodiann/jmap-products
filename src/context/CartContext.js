
import { createContext, useReducer, useEffect } from "react";

// Initialize reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                cartItems: [action.item, ...state.cartItems]
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.item),
            };
        case "CLEAR_CART":
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
};

// Create the context
export const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, { cartItems: JSON.parse(localStorage.getItem("Cart")) || [] });

    useEffect(() => {
		localStorage.setItem('Cart', JSON.stringify(state.cartItems));
	}, [state.cartItems]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};