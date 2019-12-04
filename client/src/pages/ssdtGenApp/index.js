import React, { Component } from "react";
import Modal from "components/Modal";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import SSDTGenAppImage from "images/ssdtgen.png";

class SSDTGenApp extends Component {
	state = { isOpen: false };

	toggleModal = () =>
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));

	render = () => (
		<Panel>
			<Text>
				<FileDetails
					fileName="7373647447656e000000"
					destination={{
						text: "mac",
					}}
					status="retired"
					source="https://github.com/mattcarlotta/ssdtGenApp"
				/>
				<Title>ssdtGen App</Title>
				<SubTitle>
					A standalone Mac OS application that builds and compiles custom SSDTs
					for X99, Z170, Z97, and H97 systems running Mac OS. With custom kexts
					and the SSDTs injected into the ACPI tables, it allows third party PCI
					connected devices to be recognized and functional within Mac OS.
				</SubTitle>
				<p>Tech:</p>
				<ul>
					<li>Swift</li>
					<li>Bash</li>
				</ul>
			</Text>
			<div css="cursor: pointer;" onClick={this.toggleModal}>
				<img
					css="width: 100%; max-width: 800px; margin: 0 auto; display: block;"
					src={SSDTGenAppImage}
					alt="ssdtgen.png"
				/>
			</div>
			<Modal
				isOpen={this.state.isOpen}
				maxWidth="1150px"
				onClick={this.toggleModal}
			>
				<Title>ssdtGen App</Title>
				<img
					css="width: 100%; max-width: 800px; margin: 0 auto; display: block;"
					src={SSDTGenAppImage}
					alt="ssdtgen.png"
				/>
			</Modal>
		</Panel>
	);
}

export default SSDTGenApp;
