import './stylesheet/index.css';
import companyLogo from './images/companyLogo.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from './pages/Cart';

function App() {
  
	let developer = 'JMAP';

	return (
		<>
		<Header/>
		<main>
			<Cart/>
		</main>
		<Footer
			url = {companyLogo}
			developer = {developer}
		/>
		</>
	);
}

export default App;
