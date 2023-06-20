import './stylesheet/index.css';
import companyLogo from './images/companyLogo.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginModal from './components/LoginModal';



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
		<LoginModal />
		</>
	);
}

export default App;
