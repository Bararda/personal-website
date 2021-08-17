import React from 'react';
import PropTypes from 'prop-types';
import './hamburger-button.css';

export default function HamburgerButton({ onClick }) {
	const keyPress = (ev) => {
		if (ev.key === 'Enter') {
			onClick(ev);
		}
	};
	return (
		<div className="hamburger-button" onClick={onClick} role="button" tabIndex={0} onKeyPress={keyPress}>
			<div className="hamburger-button-slit" />
			<div className="hamburger-button-slit" />
			<div className="hamburger-button-slit" />
		</div>
	);
}

HamburgerButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

HamburgerButton.defaultProps = {
};
