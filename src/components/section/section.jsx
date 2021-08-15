import HeadShot from 'components/head-shot/head-shot';
import React from 'react';
import SectionHeader from './section-header/section-header';
import './section.css';
// import PropTypes from 'prop-types';

export default function Section() {
	return (
		<div className="section">
			<HeadShot />
			<div>
				<SectionHeader header="About Me" />
				This is a test
			</div>
		</div>
	);
}

Section.propTypes = {
};

Section.defaultProps = {
};
