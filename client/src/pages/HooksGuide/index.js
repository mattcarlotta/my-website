import React from "react";
import Panel from "components/Panel";
import SubTitle from "components/SubTitle";
import Title from "components/Title";
import ReactHooks from "images/reacthooks.png";

const HooksGuide = () => (
	<Panel>
		<Title>
			<a
				href="https://react-hooks.mattcarlotta.io"
				rel="noopener noreferrer"
				target="_blank"
			>
				React Hooks Guide
			</a>
		</Title>
		<SubTitle>
			An educational website to help up-and-coming developers understand React’s
			newly introduced hooks. It offers example code with notes about current
			limitations and requirements when working with hooks.
		</SubTitle>
		<img width="100%" src={ReactHooks} alt="reacthooks.png" />
	</Panel>
);

export default HooksGuide;
