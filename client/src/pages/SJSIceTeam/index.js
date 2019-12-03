import React from "react";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import SJSIceTeamImage from "images/sjsiceteam.png";

const SJSIceTeam = () => (
	<Panel>
		<Text>
			<FileDetails
				fileName="736a736963657465616d"
				destination={{
					link: "https://sjsiceteam.com",
					text: "https://sjsiceteam.com",
				}}
				status="online"
				source="https://github.com/mattcarlotta/SJSITApp"
			/>
			<Title>SJS Ice Team</Title>
			<SubTitle>
				An application to consolidate Google forms, Excel, and PDFs into a
				single, unified, semi-automated month-to-month scheduling service for
				25+ members of the San Jose Sharks Ice Team.
			</SubTitle>
			<p>Tech:</p>
			<ul>
				<li>MongoDB</li>
				<li>ExpressJS</li>
				<li>ReactJS (w/ReduxJS)</li>
				<li>NodeJS</li>
				<li>Ngnix</li>
			</ul>
		</Text>
		<img width="100%" src={SJSIceTeamImage} alt="sjsiceteam.png" />
	</Panel>
);

export default SJSIceTeam;
