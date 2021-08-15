import React from 'react';
import PropTypes from 'prop-types';
import './section-header.css';

export default function SectionHeader({ header }) {
	const headerWords = header ? header.split(' ') : [];

	return (
		<h1 className="section-header">
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
};

SectionHeader.defaultProps = {
	header: null,
};
