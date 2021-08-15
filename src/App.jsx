import React from 'react';
import {
	Footer, Header, LandingPage,
} from './components';
// import github from '/assets/images/GitHub-Mark-Light-32px.png';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<LandingPage />
			<Footer />
		</div>
	);
}

export default App;
