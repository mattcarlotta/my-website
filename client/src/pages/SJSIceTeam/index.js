import React from "react";
import Panel from "components/Panel";
import Info from "components/Info";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import SJSIceTeamImage from "images/sjsiceteam.png";

const SJSIceTeam = () => (
	<Panel>
		<Text>
			<Info style={{ marginTop: 20 }}>File: 7265616374686f6f6b73</Info>
			<Info>Status: online</Info>
			<Info>
				Destination:&nbsp;
				<a
					href="https://sjsiceteam.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					https://www.sjsiceamteam.com
				</a>
			</Info>
			<Info>
				Source:&nbsp;
				<a
					href="https://github.com/mattcarlotta/SJSITApp"
					rel="noopener noreferrer"
					target="_blank"
				>
					github
				</a>
			</Info>
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
