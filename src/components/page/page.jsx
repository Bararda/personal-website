import React from 'react';
import useWindowDimensions from 'hooks/use-window-dimensions';
import PropTypes from 'prop-types';

export default function Page({ children, className }) {
	const dimensions = useWindowDimensions();
	return (
		<div style={{ height: dimensions.height }} className={className}>
			{children}
		</div>
	);
}

Page.propTypes = {
	children: PropTypes.element,
	className: PropTypes.string,
};

Page.defaultProps = {
	children: null,
	className: null,
};
