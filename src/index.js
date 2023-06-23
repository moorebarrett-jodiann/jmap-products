import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import NiceModal from '@ebay/nice-modal-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<NiceModal.Provider>
			<Router>
				<App />
			</Router>
		</NiceModal.Provider>
		
	</React.StrictMode>
);