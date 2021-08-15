import React from 'react';
import PropTypes from 'prop-types';
import HeaderItem from './header-item/header-item';

import './header.css';

export default function Header({ children }) {
	return (
		<div className="header">
			{children}
			<HeaderItem href="#">Home</HeaderItem>
			<HeaderItem href="#">About Me</HeaderItem>
			<HeaderItem href="#">Experience</HeaderItem>
			<HeaderItem href="#">Projects</HeaderItem>
		</div>
	);
}

Header.propTypes = {
	children: PropTypes.element,
};

Header.defaultProps = {
	children: null,
};
