import React from 'react';
import SectionHeader from 'components/section-header/section-header';
import HeadShot from 'components/head-shot/head-shot';
import './about-me.css';

export default function AboutMe() {
	return (
		<div className="about-me">
			<HeadShot />
			<div>
				<SectionHeader header="About Me" />
				<span>
					I&apos;m a full stack software developer with a passion for learning and improving.
					I currently live in Victoria, BC and work at North Orca Technologies Inc.
					I graduated from the Southern Alberta Institute of Technology in 2019 for
					software development. I&apos;m always looking for new opportunities to challenge
					myself and grow as a developer.
				</span>
			</div>
		</div>
	);
}

AboutMe.propTypes = {
};

AboutMe.defaultProps = {
};
