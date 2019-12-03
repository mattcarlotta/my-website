import React from "react";
import Panel from "components/Panel";
import Info from "components/Info";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import ReactHooks from "images/reacthooks.png";

const HooksGuide = () => (
	<Panel>
		<Text>
			<Info style={{ marginTop: 20 }}>File: 736a736963657465616d</Info>
			<Info>Status: online</Info>
			<Info>
				Destination:&nbsp;
				<a
					href="https://react-hooks.mattcarlotta.io"
					rel="noopener noreferrer"
					target="_blank"
				>
					https://react-hooks.mattcarlotta.io
				</a>
			</Info>
			<Info>
				Source:&nbsp;
				<a
					href="https://github.com/mattcarlotta/react-hooks"
					rel="noopener noreferrer"
					target="_blank"
				>
					github
				</a>
			</Info>
			<Title>React Hooks Guide</Title>
			<SubTitle>
				An educational website to help up-and-coming developers understand
				React’s newly introduced hooks. It offers example code with notes about
				current limitations and requirements when working with hooks.
			</SubTitle>
			<p>Tech:</p>
			<ul>
				<li>ExpressJS</li>
				<li>ReactJS (w/ReduxJS)</li>
				<li>NodeJS</li>
				<li>Ngnix</li>
			</ul>
		</Text>
		<img width="100%" src={ReactHooks} alt="reacthooks.png" />
	</Panel>
);

export default HooksGuide;
