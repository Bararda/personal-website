import React from 'react';
import SectionHeader from 'components/section-header/section-header';
import NorthOrca from 'assets/images/norca-logo.png';
import './experience.css';

export default function Experience() {
	const content = 'North Orca'; // TO-DO
	return (
		<div className="about-me">
			<img className="headshot-image" src={NorthOrca} alt="North Orca" />
			<div>
				<SectionHeader header="Experience" />
				{content}
			</div>
		</div>
	);
}

Experience.propTypes = {
};

Experience.defaultProps = {
};
