import React from "react";
import Modal from "components/Modal";
import ModalContainer from "components/ModalContainer";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import SJSIceTeamImage from "images/sjsiceteam.png";

const SJSIceTeam = () => (
	<ModalContainer>
		{(isOpen, toggleModal) => (
			<Panel>
				<Text>
					<FileDetails
						fileName="736a736963657465616d"
						destination={{
							link: "https://sjsiceteam.com",
							text: "https://sjsiceteam.com",
						}}
						status="online"
						source="https://github.com/mattcarlotta/SJSITApp"
					/>
					<Title>SJS Ice Team</Title>
					<SubTitle>
						An application to consolidate Google forms, Excel, and PDFs into a
						single, unified, semi-automated month-to-month scheduling service
						for 25+ members of the San Jose Sharks Ice Team.
					</SubTitle>
					<p>Tech:</p>
					<ul>
						<li>MongoDB</li>
						<li>ExpressJS</li>
						<li>ReactJS (w/ReduxJS)</li>
						<li>NodeJS</li>
						<li>Ngnix</li>
					</ul>
				</Text>
				<div css="cursor: pointer;" onClick={toggleModal}>
					<img width="100%" src={SJSIceTeamImage} alt="sjsiceteam.png" />
				</div>
				<Modal isOpen={isOpen} maxWidth="2325px" onClick={toggleModal}>
					<Title>SJS Ice Team</Title>
					<img
						css="width: 100%; max-width: 2000px; margin: 0 auto; display: block;"
						src={SJSIceTeamImage}
						alt="sjsiceteam.png"
					/>
				</Modal>
			</Panel>
		)}
	</ModalContainer>
);

export default SJSIceTeam;
