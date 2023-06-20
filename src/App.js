import './stylesheet/index.css';
import companyLogo from './images/companyLogo.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from './pages/Details';


function App() {
  
	let developer = 'JMAP';

	return (
		<>
		<Header/>
		<main>
		<Details/>
		</main>
		<Footer
			url = {companyLogo}
			developer = {developer}
		/>
		</>
	);
}

export default App;
