import React from "react";
import { FaGithub } from "react-icons/fa";
import Panel from "components/Panel";
import SubTitle from "components/SubTitle";
import Title from "components/Title";
import YelpCampImage from "images/yelpcamp.png";

const YelpCamp = () => (
	<Panel>
		<Title>
			<span css="margin-right: 5px;">Yelp Camp</span>
			<a
				css="position: relative;top: 2px;font-size: 15px;"
				href="https://github.com/mattcarlotta/campground-app-frontend"
				rel="noopener noreferrer"
				target="_blank"
			>
				<FaGithub />
			</a>
		</Title>
		<SubTitle>
			An experimental website for creating, editing, and reviewing campgrounds
			from all over California.
		</SubTitle>
		<img width="100%" src={YelpCampImage} alt="yelpcamp.png" />
	</Panel>
);

export default YelpCamp;
