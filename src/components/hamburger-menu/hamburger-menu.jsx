import React, { useState } from 'react';
import HamburgerButton from 'components/hamburger-menu/hamburger-button/hamburger-button';
import HamburgerDrawer from 'components/hamburger-menu/hamburger-drawer/hamburger-drawer';
import PropTypes from 'prop-types';
import './hamburger-menu.css';

export default function HamburgerMenu({ children }) {
	const [openDrawer, setOpenDrawer] = useState(false);
	const toggleDrawerCallback = () => {
		setOpenDrawer(!openDrawer);
	};

	return (
		<div className={`hamburger-menu ${openDrawer ? 'drawer-open' : 'drawer-closed'}`}>
			<HamburgerButton onClick={toggleDrawerCallback} />
			<HamburgerDrawer>
				{children}
			</HamburgerDrawer>
		</div>
	);
}

HamburgerMenu.propTypes = {
	children: PropTypes.element,
};

HamburgerMenu.defaultProps = {
	children: undefined,
};
