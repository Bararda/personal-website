import React from 'react';
import useWindowDimensions from 'hooks/use-window-dimensions';
import PropTypes from 'prop-types';

export default function Page({ children, className, id }) {
	const dimensions = useWindowDimensions();
	return (
		<div style={{ height: dimensions.height }} className={className} id={id}>
			{children}
		</div>
	);
}

Page.propTypes = {
	children: PropTypes.element,
	className: PropTypes.string,
	id: PropTypes.string,
};

Page.defaultProps = {
	children: undefined,
	className: undefined,
	id: undefined,
};
