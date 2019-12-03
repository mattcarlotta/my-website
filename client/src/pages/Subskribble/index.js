import React from "react";
import { FaGithub } from "react-icons/fa";
import Panel from "components/Panel";
import SubTitle from "components/SubTitle";
import Title from "components/Title";
import SubskribbleImage from "images/subskribble.png";

const Subskribble = () => (
	<Panel>
		<Title>
			<span css="margin-right: 5px;">Subskribble</span>
			<a
				css="position: relative;top: 2px;font-size: 15px;"
				href="https://github.com/mattcarlotta/subskribble"
				rel="noopener noreferrer"
				target="_blank"
			>
				<FaGithub />
			</a>
		</Title>
		<SubTitle>
			A web application to create, manage, and send personalized updates to a
			lists of subscribers. It utilizes Ant Design&#39;s front-end React UI
			framework while running a NodeJS back-end that connects to a postgreSQL
			database.
		</SubTitle>
		<img width="100%" src={SubskribbleImage} alt="subskribble.png" />
	</Panel>
);

export default Subskribble;
