import React from 'react';
import SectionHeader from 'components/section-header/section-header';
import RedWings from 'assets/images/red_wings.png';
import BlueDice from 'assets/images/blue_wings.png';
import Wolfram from 'assets/images/wolfram.png';
import Arduino from 'assets/images/arduino.png';
import WackyWarehouse from 'assets/images/ww.png';
import './project.css';

export default function PersonalProject() {
	return (
		<div className="personal-projects">
			<SectionHeader header="Personal Projects" />
			<div className="personal-projects-body">
				<div className="project-grid">
					<img className="project-image" src={RedWings} alt="Dnd management app" />
					<div>
						<SectionHeader header="Dnd Management" size="md" />
						<SectionHeader header="Front end" size="sm" link="https://github.com/Bararda/inventory-manager-frontend" />
						<SectionHeader header="Back end" size="sm" link="https://github.com/Bararda/inventory-manager-backend" />
						<span>
							Dnd Management is a website that allows for users to manage various
							Dungeons and Dragons tasks such as preparing spells, managing their inventory,
							and building character sheets. It&apos;s split into two repositories a Nodejs and
							Mysql backend and a React frontend.
						</span>
					</div>
				</div>
				<div className="project-grid right-image">
					<div className="empty-column" />
					<div>
						<SectionHeader header="NPC Manager" size="md" link="https://github.com/Bararda/npc-manager" />
						<span>
							The NPC Manager is a react app for Dungeons and Dragons that lets users create and
							roll multiple NPCs at once using their base stats. I made this for our dm when we
							started playing the &apos;Out of the Abyss&apos; adventure module
						</span>
					</div>
					<img className="project-image" src={BlueDice} alt="Dnd management app" />
				</div>
				<div className="project-grid">
					<img className="project-image" src={WackyWarehouse} alt="Dnd management app" />
					<div>
						<SectionHeader header="Lost Relic Game Jam 2022" size="md" link="https://github.com/Bararda/lost-relic-game-jam-2022" />
						<SectionHeader header="Trevors Github" size="sm" link="https://github.com/billbobphil" />
						<span>
							A submission for the Lost Relic Game Jam 2022. This game is made using Unity and C#.
							It was developed by myself and Trevor
							It was a fun project that we did as a means to better learn Unity and
							learn more about game development.
						</span>
					</div>
				</div>
				<div className="project-grid right-image">
					<div className="empty-column" />
					<div>
						<SectionHeader header="Arduino light Controller" size="md" link="https://github.com/Bararda/lights" />
						<span>
							This is a basic arduino project that I use to run my LED light strip at home. It runs
							on an arduino nano and I have that connected to a computer running a Nodejs
							server hosting a basic webpage for me to control the lights
						</span>
					</div>
					<img className="project-image" src={Arduino} alt="Dnd management app" />

				</div>
				<div className="project-grid">
					<img className="project-image" src={Wolfram} alt="Dnd management app" />
					<div>
						<SectionHeader header="Dice Tower" size="md" link="https://github.com/Bararda/dice-tower" />
						<span>
							With this project Im intending to create a dice tower that can read the rolls of
							the players and do fun things when the player roll well or poorly. It uses
							a raspberry pi and picamera to take the photos and send those off the a Nodejs server
							for image processing. The image processing is done using the Wolfram Language and it
							uses the google OCR for reading the text
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

PersonalProject.propTypes = {
};

PersonalProject.defaultProps = {
};
