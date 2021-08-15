import React from 'react';
import headshot from 'assets/images/headshot.jpg';
import PropTypes from 'prop-types';
import './head-shot.css';

export default function HeadShot({ height = '300px', width = '300px' }) {
	return (
		<div style={{ height, width }}>
			<img className="headshot-image" src={headshot} alt="headshot" />
		</div>
	);
}

HeadShot.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string,

};

HeadShot.defaultProps = {
	height: '300px',
	width: '300px',
};
