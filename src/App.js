import './stylesheet/index.css';
import companyLogo from './images/companyLogo.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from './pages/Details';
import Product from './pages/Product';
import About from './pages/About';
import OrderPlaced from './pages/OrderPlaced';
import DiscountBanner from './components/DiscountBanner';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';


function App() {
	let logo = companyLogo;

	const [show,setShow] = useState(true);

	const hideHeader = () => {
		setShow(false);
	}

	const showHeader = () => {
		setShow(true);
	}
  

	return (
		<CartProvider> {/* Wrap the components with CartProvider */}
			<>
				{show&&<DiscountBanner />}
				{show&&<Header
					url={logo}
				/>}
				<main>
					<Routes >
						<Route path="/" element={<Product />} />
						<Route path="/product/:id" element={<Details />} />
						<Route path="/my-cart" element={<Cart />} />
						<Route path="/about-us" element={<About />} />
						<Route path="/order-confirmed" element={<OrderPlaced />} />
						<Route path="/*" element={<NotFound hideHeader={hideHeader} showHeader={showHeader} />} />
					</Routes>
				</main>
				{show&&<Footer
					url={logo}
				/>}
			</>
		</CartProvider>
	);
}

export default App;
