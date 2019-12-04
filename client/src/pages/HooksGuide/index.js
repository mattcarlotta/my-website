import React, { Component } from "react";
import Modal from "components/Modal";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import ReactHooks from "images/reacthooks.png";

class HooksGuide extends Component {
	state = { isOpen: false };

	toggleModal = () =>
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));

	render = () => (
		<Panel>
			<Text>
				<FileDetails
					fileName="7265616374686f6f6b73"
					destination={{
						link: "https://react-hooks.mattcarlotta.io",
						text: "https://react-hooks.mattcarlotta.io",
					}}
					status="online"
					source="https://github.com/mattcarlotta/react-hooks"
				/>
				<Title>React Hooks Guide</Title>
				<SubTitle>
					An educational website to help up-and-coming developers understand
					React’s newly introduced hooks. It offers example code with notes
					about current limitations and requirements when working with hooks.
				</SubTitle>
				<p>Tech:</p>
				<ul>
					<li>ExpressJS</li>
					<li>ReactJS (w/ReduxJS)</li>
					<li>NodeJS</li>
					<li>Ngnix</li>
				</ul>
			</Text>
			<div css="cursor: pointer;" onClick={this.toggleModal}>
				<img width="100%" src={ReactHooks} alt="reacthooks.png" />
			</div>
			<Modal
				isOpen={this.state.isOpen}
				maxWidth="2350px"
				onClick={this.toggleModal}
			>
				<Title>React Hooks Guide</Title>
				<img
					css="width: 100%; max-width: 2000px; margin: 0 auto; display: block;"
					src={ReactHooks}
					alt="reacthooks.png"
				/>
			</Modal>
		</Panel>
	);
}

export default HooksGuide;
