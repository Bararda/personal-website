import React from 'react';
import PropTypes from 'prop-types';
import './file-download.css';

export default function FileDownload({ children, filePath, proposedFileName }) {
	return (
		<a href={filePath} download={proposedFileName} target="_blank" rel="noreferrer">
			{children}
		</a>
	);
}

FileDownload.propTypes = {
	children: PropTypes.element,
	filePath: PropTypes.string,
	proposedFileName: PropTypes.string,
};

FileDownload.defaultProps = {
	children: undefined,
	filePath: undefined,
	proposedFileName: undefined,
};
