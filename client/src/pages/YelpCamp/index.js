import React from "react";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import YelpCampImage from "images/yelpcamp.png";

const YelpCamp = () => (
	<Panel>
		<Text>
			<FileDetails
				fileName="79656c7063616d700000"
				destination={{
					text: "offline",
				}}
				status="retired"
				source="https://github.com/mattcarlotta/campground-app-frontend"
			/>
			<Title>Yelp Camp</Title>
			<SubTitle>
				An experimental website for creating, editing, and reviewing campground
				sites from all over California.
			</SubTitle>
			<p>Tech:</p>
			<ul>
				<li>MongoDB</li>
				<li>ExpressJS</li>
				<li>ReactJS (w/ReduxJS)</li>
				<li>NodeJS</li>
			</ul>
		</Text>
		<img width="100%" src={YelpCampImage} alt="yelpcamp.png" />
	</Panel>
);

export default YelpCamp;
