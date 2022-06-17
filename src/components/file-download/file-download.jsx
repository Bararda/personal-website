import React from 'react';
import PropTypes from 'prop-types';
import fileIcon from 'assets/images/file-download.png';
import './file-download.css';

export default function FileDownload({ children, filePath }) {
	return (
		<a href={filePath} target="_blank" rel="noreferrer" className="file-download">
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
};

FileDownload.defaultProps = {
	children: undefined,
	filePath: undefined,
};
