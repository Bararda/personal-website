import React from 'react';
import PropTypes from 'prop-types';
import './section-header.css';

const sizes = {
	large: 'lg',
	medium: 'md',
	small: 'sm',
};
/**
 * Section Header Component
 * @param {{header: string size: ('sm'|'md'|'lg') }} props react properties
 * @param {string} props.header text for the header
 * @param {('sm'|'md'|'lg')} props.size size of the header, sm, md, or lg
 * @returns
 */
export default function SectionHeader({ header, size = sizes.large }) {
	const headerWords = header ? header.split(' ') : [];
	const style = {};
	if (size === sizes.large) {
		style.fontSize = '30px';
	} else if (size === sizes.medium) {
		style.fontSize = '20px';
	} else if (size === sizes.small) {
		style.fontSize = '15px';
	}
	return (
		<h1 className="section-header" style={style}>
			{headerWords.map((word) => (
				<span>
					{`${word} `}
				</span>
			))}
		</h1>
	);
}

SectionHeader.propTypes = {
	header: PropTypes.string,
	size: PropTypes.string,
};

SectionHeader.defaultProps = {
	header: undefined,
	size: 'large',
};
