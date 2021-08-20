import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from 'components/hamburger-menu/hamburger-menu';
import './header.css';

export default function Header({ children }) {
	return (
		<div>
			<div className="header">
				{children}
			</div>
			<HamburgerMenu>
				{children}
			</HamburgerMenu>
		</div>

	);
}

Header.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.node),
	]),
};

Header.defaultProps = {
	children: null,
};
