import React from 'react';
import SectionHeader from 'components/section-header/section-header';
import HeadShot from 'components/head-shot/head-shot';
import './about-me.css';

export default function AboutMe() {
	const content = `I'm a full stack software developer with a passion for learning and improving.
	`; // TO-DO
	return (
		<div className="about-me">
			<HeadShot />
			<div>
				<SectionHeader header="About Me" />
				{content}
			</div>
		</div>
	);
}

AboutMe.propTypes = {
};

AboutMe.defaultProps = {
};
