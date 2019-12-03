import React from "react";
import Panel from "components/Panel";
import SubTitle from "components/SubTitle";
import Title from "components/Title";
import SJSIceTeamImage from "images/sjsiceteam.png";

const SJSIceTeam = () => (
	<Panel>
		<Title>
			<a
				href="https://sjsiceteam.com"
				rel="noopener noreferrer"
				target="_blank"
			>
				SJS Ice Team
			</a>
		</Title>
		<SubTitle>
			An application to consolidate Google forms, Excel, and PDFs into a single,
			unified, semi-automated month-to-month scheduling service for 25+ members
			of the San Jose Sharks Ice Team.
		</SubTitle>
		<img width="100%" src={SJSIceTeamImage} alt="sjsiceteam.png" />
	</Panel>
);

export default SJSIceTeam;
