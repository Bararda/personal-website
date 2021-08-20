import React from 'react';
import PropTypes from 'prop-types';
import fileIcon from 'assets/images/file-download.png';
import './file-download.css';

export default function FileDownload({ children, filePath, proposedFileName }) {
	return (
		<a href={filePath} download={proposedFileName} target="_blank" rel="noreferrer" className="file-download">
			<img src={fileIcon} alt="download File" />
			{children}
		</a>
	);
}

FileDownload.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.node),
	]),
	filePath: PropTypes.string,
	proposedFileName: PropTypes.string,
};

FileDownload.defaultProps = {
	children: undefined,
	filePath: undefined,
	proposedFileName: undefined,
};
