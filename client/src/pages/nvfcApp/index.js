import React from "react";
import Panel from "components/Panel";
import SubTitle from "components/SubTitle";
import Title from "components/Title";
import NVFCAppImage from "images/nvfcapp.gif";

const nvfcApp = () => (
	<Panel>
		<Title>
			<a
				href="https://github.com/mattcarlotta/nvfcApp"
				rel="noopener noreferrer"
				target="_blank"
			>
				Nvidia Fan Controller (nvfc) App
			</a>
		</Title>
		<SubTitle>
			A GTK3 application written in python that creates a modifiable 2D curve of
			temp and fan speed points that automatically controls a Nvidia GPU&#39;s
			fan based on the GPU&#39;s temperature. Enable, disable, save and load csv
			files and/or monitor GPU stats.
		</SubTitle>
		<br />
		<img
			css="width: 100%; max-width: 650px; margin: 0 auto; display: block;"
			src={NVFCAppImage}
			alt="nvfcapp.gif"
		/>
	</Panel>
);

export default nvfcApp;
