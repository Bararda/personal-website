import React from 'react';
import headshot from 'assets/images/headshot.jpg';
import PropTypes from 'prop-types';
import './head-shot.css';

export default function HeadShot({ height = '100%', width = '100%' }) {
	return (
		<div className="headshot-container" style={{ height, width }}>
			<img className="headshot-image image-accent" src={headshot} alt="headshot" />
		</div>
	);
}

HeadShot.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string,

};

HeadShot.defaultProps = {
	height: '100%',
	width: '100%',
};
