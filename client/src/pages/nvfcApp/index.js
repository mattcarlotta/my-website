import React from "react";
import Modal from "components/Modal";
import ModalContainer from "components/ModalContainer";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import NVFCAppImage from "images/nvfcapp.gif";

const NVFCApp = () => (
	<ModalContainer>
		{(isOpen, toggleModal) => (
			<Panel>
				<Text>
					<FileDetails
						fileName="6e766663417070000000"
						destination={{
							text: "linux",
						}}
						status="in standby"
						source="https://github.com/mattcarlotta/nvfcApp"
					/>
					<Title>Nvidia Fan Controller (nvfc) App</Title>
					<SubTitle>
						A standalone Linux application that creates a modifiable 2D curve of
						temp and fan speed points that automatically controls a Nvidia
						GPU&#39;s fan based on the GPU&#39;s temperature. Enable, disable,
						save and load csv files and/or monitor GPU stats.
					</SubTitle>
					<p>Tech:</p>
					<ul>
						<li>python3</li>
						<li>matplotlib</li>
						<li>pip3</li>
						<li>pyGTK</li>
						<li>nvidia drivers</li>
					</ul>
				</Text>
				<br />
				<div css="cursor: pointer;" onClick={toggleModal}>
					<img
						css="width: 100%; max-width: 650px; margin: 0 auto; display: block;"
						src={NVFCAppImage}
						alt="nvfcapp.gif"
					/>
				</div>
				<Modal isOpen={isOpen} maxWidth="1350px" onClick={toggleModal}>
					<Title>Nvidia Fan Controller (nvfc) App</Title>
					<br />
					<img
						css="width: 100%; max-width: 800px; margin: 0 auto; display: block;"
						src={NVFCAppImage}
						alt="nvfcapp.png"
					/>
				</Modal>
			</Panel>
		)}
	</ModalContainer>
);

export default NVFCApp;
