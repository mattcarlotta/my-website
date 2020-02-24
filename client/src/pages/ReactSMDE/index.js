import React from "react";
import Modal from "components/Modal";
import ModalContainer from "components/ModalContainer";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import ReactSMDEImage from "images/reactSMDE.png";

const ReactSMDE = () => (
	<ModalContainer>
		{(isOpen, toggleModal) => (
			<Panel>
				<Text>
					<FileDetails
						fileName="7265616374736d646500"
						destination={{
							link: "https://mattcarlotta.github.io/react-smde",
							text: "https://mattcarlotta.github.io/react-smde",
						}}
						status="online"
						source="https://github.com/mattcarlotta/react-smde"
					/>
					<Title>React SMDE</Title>
					<SubTitle>
						An unopinionated, lightweight, Simple Markdown Editor for React.
						Prebuilt as a CommonJS Module, but also contains Universal Module
						Definition and ES Module versions.
					</SubTitle>
					<p>Tech:</p>
					<ul>
						<li>ReactJS</li>
						<li>SCSS</li>
						<li>RollupJS</li>
						<li>StorybookJS</li>
					</ul>
				</Text>
				<div css="cursor: pointer;" onClick={toggleModal}>
					<img width="100%" src={ReactSMDEImage} alt="ReactSMDE.png" />
				</div>
				<Modal isOpen={isOpen} maxWidth="2325px" onClick={toggleModal}>
					<Title>SJS Ice Team</Title>
					<img
						css="width: 100%; max-width: 2000px; margin: 0 auto; display: block;"
						src={ReactSMDEImage}
						alt="ReactSMDE.png"
					/>
				</Modal>
			</Panel>
		)}
	</ModalContainer>
);

export default ReactSMDE;
