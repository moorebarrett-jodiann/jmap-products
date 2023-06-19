import './stylesheet/index.css';
import companyLogo from './images/companyLogo.png';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  
	let developer = 'JMAP';

	return (
		<>
		<Header/>
		<main>
			
		</main>
		<Footer
			url = {companyLogo}
			developer = {developer}
		/>
		</>
	);
}

export default App;
