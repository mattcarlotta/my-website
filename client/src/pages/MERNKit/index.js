import React from "react";
import Panel from "components/Panel";
import SubTitle from "components/SubTitle";
import Title from "components/Title";
import MERNKitImage from "images/mernkit.png";

const MERNKit = () => (
	<Panel>
		<Title>
			<a
				href="https://github.com/mattcarlotta/fullstack-mern-kit"
				rel="noopener noreferrer"
				target="_blank"
			>
				Full Stack MERN Kit
			</a>
		</Title>
		<SubTitle>
			A boilerplate for MongoDB, Express, React/Redux and Node solutions. Comes
			packaged with a highly customized webpack configuration, webpack
			middlewares, babel configurations, eslint, stylelint, and a whole lot
			more. This website was built with this boilerplate!
		</SubTitle>
		<img width="100%" src={MERNKitImage} alt="mernkit.png" />
	</Panel>
);

export default MERNKit;
