import React from "react";
import Panel from "components/Panel";
import Info from "components/Info";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import YelpCampImage from "images/yelpcamp.png";

const YelpCamp = () => (
	<Panel>
		<Text>
			<Info style={{ marginTop: 20 }}>File: 79656c7063616d700000</Info>
			<Info>Status: retired</Info>
			<Info>Destination:&nbsp;offline</Info>
			<Info>
				Source:&nbsp;
				<a
					href="https://github.com/mattcarlotta/campground-app-frontend"
					rel="noopener noreferrer"
					target="_blank"
				>
					github
				</a>
			</Info>
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
