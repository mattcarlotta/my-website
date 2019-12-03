import React from "react";
import Panel from "components/Panel";
import Info from "components/Info";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import SSDTGenAppImage from "images/ssdtgen.png";

const SSDTGenApp = () => (
	<Panel>
		<Text>
			<Info style={{ marginTop: 20 }}>File: 7373647447656e000000</Info>
			<Info>Status: retired</Info>
			<Info>Destination:&nbsp;mac</Info>
			<Info>
				Source:&nbsp;
				<a
					href="https://github.com/mattcarlotta/ssdtGenApp"
					rel="noopener noreferrer"
					target="_blank"
				>
					github
				</a>
			</Info>
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
		<img
			css="width: 100%; max-width: 800px; margin: 0 auto; display: block;"
			src={SSDTGenAppImage}
			alt="ssdtgen.png"
		/>
	</Panel>
);

export default SSDTGenApp;
