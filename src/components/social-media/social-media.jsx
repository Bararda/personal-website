import React from 'react';
import PropTypes from 'prop-types';
import './social-media.css';

/**
 * Social media image link
 * @param {props} props react props
 * @returns react jsx for a social media item
 */
export default function SocialMediaItem({
	link, img, alt = 'social-media-link', title = 'social media link',
}) {
	return (
		<a href={link} className="social-media-link" target="_blank" rel="noreferrer" title={title}>
			<div className="social-media-container">
				<img className="social-media-image" src={img} alt={alt} />
			</div>
		</a>
	);
}

SocialMediaItem.propTypes = {
	link: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	alt: PropTypes.string,
	title: PropTypes.string,
};

SocialMediaItem.defaultProps = {
	alt: 'social-media-link',
	title: 'social media link',
};
