import './stylesheet/header-footer.css';
import companyLogo from './images/companyLogo.png';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

	let facebookLogo = <i className="fa-brands fa-facebook"></i>;
	let instagramLogo = <i className="fa-brands fa-instagram"></i>;
	let twitterLogo = <i className="fa-brands fa-twitter"></i>;
	let developer = 'JMAP';


	return (
		<>
		<Header/>
		<main>
			<Footer
			url = {companyLogo}
			facebookLogo = {facebookLogo}
			instagramLogo = {instagramLogo}
			twitterLogo = {twitterLogo}
			developer = {developer}
			/>
		</main>
		</>
	);
}

export default App;
