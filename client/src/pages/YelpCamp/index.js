import React from "react";
import Panel from "components/Panel";
import SubTitle from "components/SubTitle";
import Title from "components/Title";
import YelpCampImage from "images/yelpcamp.png";

const YelpCamp = () => (
	<Panel>
		<Title>
			<a
				href="https://github.com/mattcarlotta/campground-app-frontend"
				rel="noopener noreferrer"
				target="_blank"
			>
				Yelp Camp
			</a>
		</Title>
		<SubTitle>
			An experimental React front end application that combines with a NodeJS
			backend server running Express and MongoDB to create a website for
			creating, editing, and reviewing campgrounds from all over California.
		</SubTitle>
		<img width="100%" src={YelpCampImage} alt="yelpcamp.png" />
	</Panel>
);

export default YelpCamp;
