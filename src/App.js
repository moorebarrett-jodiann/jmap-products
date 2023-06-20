import './stylesheet/index.css';
import companyLogo from './images/companyLogo.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from './pages/Product';
import { Routes, Route } from 'react-router-dom';

function App() {
	let logo = companyLogo;

	return (
		<>
			<Header
				url={logo}
			/>
			<main>
				<Routes >
					<Route path="/" element={<Product />} />
				</Routes>
			</main>
			<Footer
				url={companyLogo}
			/>
		</>
	);
}

export default App;
