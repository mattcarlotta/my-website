import React from "react";
import Modal from "components/Modal";
import ModalContainer from "components/ModalContainer";
import Panel from "components/Panel";
import FileDetails from "components/FileDetails";
import SubTitle from "components/SubTitle";
import Text from "components/Text";
import Title from "components/Title";
import YelpCampImage from "images/yelpcamp.png";

const YelpCamp = () => (
	<ModalContainer>
		{(isOpen, toggleModal) => (
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
						An experimental website for creating, editing, and reviewing
						campground sites from all over California.
					</SubTitle>
					<p>Tech:</p>
					<ul>
						<li>MongoDB</li>
						<li>ExpressJS</li>
						<li>ReactJS (w/ReduxJS)</li>
						<li>NodeJS</li>
					</ul>
				</Text>
				<div css="cursor: pointer;" onClick={toggleModal}>
					<img width="100%" src={YelpCampImage} alt="yelpcamp.png" />
				</div>
				<Modal isOpen={isOpen} maxWidth="1235px" onClick={toggleModal}>
					<Title>Yelp Camp</Title>
					<img
						css="width: 100%; max-width: 976px; margin: 0 auto; display: block;"
						src={YelpCampImage}
						alt="yelpcamp.png"
					/>
				</Modal>
			</Panel>
		)}
	</ModalContainer>
);

export default YelpCamp;
