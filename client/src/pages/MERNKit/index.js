import React, { Component } from "react";
import Modal from "components/Modal";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import MERNKitImage from "images/mernkit.png";

class MERNKit extends Component {
	state = { isOpen: false };

	toggleModal = () =>
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));

	render = () => (
		<Panel>
			<Text>
				<FileDetails
					fileName="6d65726e6b6974000000"
					destination={{
						text: "roaming",
					}}
					status="in orbit"
					source="https://github.com/mattcarlotta/fullstack-mern-kit"
				/>
				<Title>Full Stack MERN Kit</Title>
				<SubTitle>
					A boilerplate for MongoDB, Express, React/Redux and Node solutions.
					Comes packaged with a highly customized webpack configuration, webpack
					middlewares, babel configurations, eslint, stylelint, and a whole lot
					more. This universe and subsequent planets were built with this tool!
				</SubTitle>
				<p>Tech:</p>
				<ul>
					<li>MongoDB</li>
					<li>ExpressJS</li>
					<li>ReactJS (w/ReduxJS)</li>
					<li>NodeJS</li>
					<li>Webpack</li>
				</ul>
			</Text>
			<div css="cursor: pointer;" onClick={this.toggleModal}>
				<img width="100%" src={MERNKitImage} alt="mernkit.png" />
			</div>
			<Modal
				isOpen={this.state.isOpen}
				maxWidth="2350px"
				onClick={this.toggleModal}
			>
				<Title>Full Stack MERN Kit</Title>
				<img
					css="width: 100%; max-width: 2000px; margin: 0 auto; display: block;"
					src={MERNKitImage}
					alt="mernkit.png"
				/>
			</Modal>
		</Panel>
	);
}

export default MERNKit;
