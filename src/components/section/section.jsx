import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './section.css';

export default function Section({ children, className }) {
	return (
		<Fade bottom>
			<section className={`${className || ''} section`}>
				{children}
			</section>
		</Fade>
	);
}

Section.propTypes = {
	children: PropTypes.string,
	className: PropTypes.string,
};

Section.defaultProps = {
	children: undefined,
	className: undefined,
};
