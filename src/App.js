import './stylesheet/index.css';
import companyLogo from './images/companyLogo.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from './pages/Details';
import Product from './pages/Product';
import DiscountBanner from './components/DiscountBanner';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
	let logo = companyLogo;

	return (
		<>
      <DiscountBanner />
        <Header
          url={logo}
        />
        <main>
          <Routes >
            <Route path="/" element={<Product />} />
            <Route path="/product/:id" element={<Details />} />
			<Route path="/my-cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer
            url={logo}
        />
		</>
	);
}

export default App;
