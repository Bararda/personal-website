import React from 'react';
import PropTypes from 'prop-types';
import './section.css';

export default function Section({ children, className }) {
	return (
		<section className={`${className} section`}>
			{children}
		</section>
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
