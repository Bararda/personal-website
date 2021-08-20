import React from 'react';
import useWindowDimensions from 'hooks/use-window-dimensions';
import PropTypes from 'prop-types';
import './page.css';

export default function Page({ children, className, id }) {
	const dimensions = useWindowDimensions();
	return (
		<div style={{ height: dimensions.height, minHeight: '650px' }} className={className} id={id}>
			{children}
		</div>
	);
}

Page.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.node),
	]),
	className: PropTypes.string,
	id: PropTypes.string,
};

Page.defaultProps = {
	children: undefined,
	className: undefined,
	id: undefined,
};
