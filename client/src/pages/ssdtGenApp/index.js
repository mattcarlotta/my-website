import React from "react";
import Panel from "components/Panel";
import SubTitle from "components/SubTitle";
import Title from "components/Title";
import SSDTGenAppImage from "images/ssdtgen.png";

const ssdtGenApp = () => (
	<Panel>
		<Title>
			<a
				href="https://github.com/mattcarlotta/ssdtGenApp"
				rel="noopener noreferrer"
				target="_blank"
			>
				ssdtGen App
			</a>
		</Title>
		<SubTitle>
			A standalone application that builds and compiles custom SSDTs for X99,
			Z170, Z97, and H97 systems running Mac OS. With custom kexts and the SSDTs
			injected into the ACPI tables, it allows third party PCI connected devices
			to be recognized and functional within Mac OS.
		</SubTitle>
		<img
			css="width: 100%; max-width: 800px; margin: 0 auto; display: block;"
			src={SSDTGenAppImage}
			alt="ssdtgen.png"
		/>
	</Panel>
);

export default ssdtGenApp;
