import React from 'react';
import SectionHeader from 'components/section-header/section-header';
import NorthOrca from 'assets/images/norca-logo.png';
import './experience.css';
import FileDownload from 'components/file-download/file-download';

export default function Experience() {
	return (
		<div className="experience">
			<SectionHeader header="Experience" />
			<div className="north-orca-experience">
				<img className="north-orca-logo image-accent" src={NorthOrca} alt="North Orca" />
				<div>
					<SectionHeader header="North Orca Technologies Inc" size="md" />
					<ul>
						<li>
							Developed and maintained code written in Javascripts ES6 syntax, Angular,
							Nodejs, and PHP.
						</li>
						<li>Designed RESTFul API&apos;s and project structures</li>
						<li>Developed in house tools to enable quicker development for team members.</li>
						<li>Designed schema objects in MySQL and wrote efficient queries.</li>
						<li>
							Configured, deployed, and maintained client servers based in windows and linux
							environments.
						</li>
						<li>Gathered requirements from clients and designed features to meet client needs</li>
						<li>Wrote unit tests, integration tests, API tests, and UI tests</li>
					</ul>
				</div>
				<FileDownload filePath="https://drive.google.com/file/d/1GAozq17goUK-ZCfrL_cPotBa0v1ev0-X/view"><span>Resume</span></FileDownload>
			</div>
		</div>

	);
}

Experience.propTypes = {
};

Experience.defaultProps = {
};
