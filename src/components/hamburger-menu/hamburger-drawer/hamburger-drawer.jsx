import React from 'react';
import PropTypes from 'prop-types';
import './hamburger-drawer.css';

export default function HamburgerDrawer({ children, className }) {
	return (
		<div className={`hamburger-drawer ${className || ''}`}>
			{children}
		</div>
	);
}

HamburgerDrawer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.node),
	]),
	className: PropTypes.string,
};

HamburgerDrawer.defaultProps = {
	children: undefined,
	className: undefined,
};
