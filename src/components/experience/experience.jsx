import React from 'react';
import SectionHeader from 'components/section-header/section-header';
import NorthOrca from 'assets/images/norca-logo.png';
import './experience.css';
import FileDownload from 'components/file-download/file-download';

export default function Experience() {
	const content = 'North Orca'; // TO-DO
	return (
		<div className="experience">
			<img className="headshot-image" src={NorthOrca} alt="North Orca" />
			<div>
				<SectionHeader header="Experience" />
				{content}
			</div>
			<FileDownload filePath="assets/files/resume.docx" proposedFileName="resume">Resume</FileDownload>
		</div>
	);
}

Experience.propTypes = {
};

Experience.defaultProps = {
};
