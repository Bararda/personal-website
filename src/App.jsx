import React from 'react';
import Header from 'components/header/header';
import LandingPage from 'components/landing/landing';
import Footer from 'components/footer/footer';
import HeaderItem from 'components/header/header-item/header-item';

import './App.css';
// autobuild trigger
function App() {
	return (
		<div className="App">
			<Header>
				<HeaderItem href="#">Home</HeaderItem>
				<HeaderItem href="#about-me">About Me</HeaderItem>
				<HeaderItem href="#experience">Experience</HeaderItem>
				<HeaderItem href="#projects">Projects</HeaderItem>
			</Header>
			<LandingPage />
			<Footer />
		</div>
	);
}

export default App;
