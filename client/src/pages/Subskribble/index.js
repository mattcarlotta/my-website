import React from "react";
import Modal from "components/Modal";
import ModalContainer from "components/ModalContainer";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import SubskribbleImage from "images/subskribble.png";

const Subskribble = () => (
	<ModalContainer>
		{(isOpen, toggleModal) => (
			<Panel>
				<Text>
					<FileDetails
						fileName="737562736b726962626c65"
						destination={{
							text: "offline",
						}}
						status="retired"
						source="https://github.com/mattcarlotta/subskribble"
					/>
					<Title>Subskribble</Title>
					<SubTitle>
						A web application to create, manage, and send personalized updates
						to a list of subscribers.
					</SubTitle>
					<p>Tech:</p>
					<ul>
						<li>PostgreSQL</li>
						<li>ExpressJS</li>
						<li>ReactJS (w/ReduxJS)</li>
						<li>NodeJS</li>
					</ul>
				</Text>
				<div css="cursor: pointer;" onClick={toggleModal}>
					<img width="100%" src={SubskribbleImage} alt="subskribble.png" />
				</div>
				<Modal isOpen={isOpen} maxWidth="1750px" onClick={toggleModal}>
					<Title>Subskribble</Title>
					<img
						css="width: 100%; max-width: 1500px; margin: 0 auto; display: block;"
						src={SubskribbleImage}
						alt="subskribble.png"
					/>
				</Modal>
			</Panel>
		)}
	</ModalContainer>
);

export default Subskribble;
