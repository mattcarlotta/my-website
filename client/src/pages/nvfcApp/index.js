import React from "react";
import Panel from "components/Panel";
import Info from "components/Info";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import NVFCAppImage from "images/nvfcapp.gif";

const NVFCApp = () => (
	<Panel>
		<Text>
			<Info style={{ marginTop: 20 }}>File: 6e766663417070000000</Info>
			<Info>Status: in standby</Info>
			<Info>Destination:&nbsp;linux</Info>
			<Info>
				Source:&nbsp;
				<a
					href="https://github.com/mattcarlotta/nvfcApp"
					rel="noopener noreferrer"
					target="_blank"
				>
					github
				</a>
			</Info>
			<Title>Nvidia Fan Controller (nvfc) App</Title>
			<SubTitle>
				A standalone Linux application that creates a modifiable 2D curve of
				temp and fan speed points that automatically controls a Nvidia GPU&#39;s
				fan based on the GPU&#39;s temperature. Enable, disable, save and load
				csv files and/or monitor GPU stats.
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
		<img
			css="width: 100%; max-width: 650px; margin: 0 auto; display: block;"
			src={NVFCAppImage}
			alt="nvfcapp.gif"
		/>
	</Panel>
);

export default NVFCApp;
