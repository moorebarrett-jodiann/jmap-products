import './stylesheet/index.css';
import './stylesheet/header-footer.css';
import companyLogo from './images/companyLogo.png';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  
	let developer = 'JMAP';

	return (
		<>
		<Header/>
		<main>
			<Footer
			    url = {companyLogo}
			    developer = {developer}
			/>
		</main>
		</>
	);
}

export default App;
