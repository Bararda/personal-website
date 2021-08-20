import React from 'react';
// import PropTypes from 'prop-types';
import SocialMediaItem from 'components/social-media/social-media';
import github from 'assets/images/GitHub-Mark-32px.png';
import linkedin from 'assets/images/linkedin-icon.png';
import instagram from 'assets/images/instagram_256_black.png';
import emailIcon from 'assets/images/email.png';
import './social-media-bar.css';

const email = 'anthonydoucet5417@hotmail.com';
const subject = 'Buisness Inqury';
export default function SocialMediaBar() {
	return (
		<div>
			<div className="social-media-bar">
				<SocialMediaItem link="https://github.com/Bararda" img={github} alt="github" title="Github" />
				<SocialMediaItem link="https://www.linkedin.com/in/anthony-doucet/" img={linkedin} alt="LinkedIn" title="LinkedIn" />
				<SocialMediaItem link="https://www.instagram.com/tonyrdoucet/" img={instagram} alt="Instagram" title="Instagram" />
				<SocialMediaItem link={`mailto:${email}?subject=${subject}`} img={emailIcon} alt="Email" title="Email" />
			</div>
		</div>
	);
}

SocialMediaBar.propTypes = {
};

SocialMediaBar.defaultProps = {
};
