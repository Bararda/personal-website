import React from 'react';
// import PropTypes from 'prop-types';
import './landing.css';
import AboutMe from 'components/about-me/about-me';
import Section from 'components/section/section';
import Page from 'components/page/page';
import Experience from 'components/experience/experience';

export default function LandingPage() {
	return (
		<div className="landing-page">
			<Page className="first-page center-page">
				<Section header="About me" className="shadow">
					<AboutMe />
				</Section>
			</Page>
			<Page className="second-page center-page">
				<Section header="About me">
					<Experience />
				</Section>
			</Page>
		</div>
	);
}

LandingPage.propTypes = {
};

LandingPage.defaultProps = {
};
