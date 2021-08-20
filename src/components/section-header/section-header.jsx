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
export default function SectionHeader({ header, size = sizes.large, link = undefined }) {
	const headerWords = header ? header.split(' ') : [];
	const style = {};
	if (size === sizes.large) {
		style.fontSize = '30px';
	} else if (size === sizes.medium) {
		style.fontSize = '20px';
	} else if (size === sizes.small) {
		style.fontSize = '15px';
	}

	const getHeaderText = () => headerWords.map((word, index) => (
		// rule disabled because there's nothing unique about this string. see https://github.com/yannickcr/eslint-plugin-react/issues/1123
		// eslint-disable-next-line react/no-array-index-key
		<span key={index}>
			{`${word} `}
		</span>
	));

	const getLinkTag = () => {
		const linkContent = getHeaderText();
		if (!link) {
			return (
				<>
					{linkContent}
				</>
			);
		}
		return (
			<a href={link} target="_blank" rel="noreferrer">
				{linkContent}
			</a>
		);
	};

	return (
		<h1 className="section-header" style={style}>
			{
				getLinkTag()
			}
		</h1>
	);
}

SectionHeader.propTypes = {
	header: PropTypes.string,
	size: PropTypes.oneOf([
		sizes.large,
		sizes.medium,
		sizes.small,
	]),
	link: PropTypes.string,
};

SectionHeader.defaultProps = {
	header: undefined,
	size: 'lg',
	link: undefined,
};
