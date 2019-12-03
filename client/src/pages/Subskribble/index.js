import React from "react";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import SubskribbleImage from "images/subskribble.png";

const Subskribble = () => (
	<Panel>
		<Text>
			<FileDetails
				fileName="737562736b726962626c65"
				destination={{
					text: "offline",
				}}
				status="retired"
				source="https://github.com/mattcarlotta/subskribble"
			/>
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
