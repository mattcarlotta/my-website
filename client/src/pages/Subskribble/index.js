import React from "react";
import Panel from "components/Panel";
import Info from "components/Info";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import SubskribbleImage from "images/subskribble.png";

const Subskribble = () => (
	<Panel>
		<Text>
			<Info style={{ marginTop: 20 }}>File: 737562736b726962626c65</Info>
			<Info>Status: retired</Info>
			<Info>Destination:&nbsp;offline</Info>
			<Info>
				Source:&nbsp;
				<a
					href="https://github.com/mattcarlotta/subskribble"
					rel="noopener noreferrer"
					target="_blank"
				>
					github
				</a>
			</Info>
			<Title>Subskribble</Title>
			<SubTitle>
				A web application to create, manage, and send personalized updates to a
				list of subscribers.
			</SubTitle>
			<p>Tech:</p>
			<ul>
				<li>PostgreSQL</li>
				<li>ExpressJS</li>
				<li>ReactJS (w/ReduxJS)</li>
				<li>NodeJS</li>
			</ul>
		</Text>
		<img width="100%" src={SubskribbleImage} alt="subskribble.png" />
	</Panel>
);

export default Subskribble;
