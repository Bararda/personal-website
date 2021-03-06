import React from 'react';
import PropTypes from 'prop-types';
import './header-item.css';

export default function HeaderItem({ href, children }) {
	return (
		<a href={href} className="header-item">
			{children}
		</a>
	);
}

HeaderItem.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.node),
	]),
};

HeaderItem.defaultProps = {
	children: null,
};
