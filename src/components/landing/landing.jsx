import React from 'react';
// import PropTypes from 'prop-types';
import './landing.css';
import AboutMe from 'components/about-me/about-me';
import Section from 'components/section/section';
import Page from 'components/page/page';
import Experience from 'components/experience/experience';
import PersonalProject from 'components/project/project';

export default function LandingPage() {
	return (
		<div className="landing-page">
			<Page className="first-page center-page" id="about-me">
				<Section className="shadow about-me-container">
					<AboutMe />
				</Section>
			</Page>
			<div id="experience">
				<Section>
					<Experience />
				</Section>
			</div>

			<div id="projects">
				<Section>
					<PersonalProject />
				</Section>
			</div>

		</div>
	);
}

LandingPage.propTypes = {
};

LandingPage.defaultProps = {
};
