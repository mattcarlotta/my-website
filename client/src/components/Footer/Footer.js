import React from "react";
import PropTypes from "prop-types";
import FlexCenter from "components/FlexCenter";

const FOOTERLINKS = [
	{
		icon: "fa-envelope",
		link: "mailto:carlotta.matt@gmail.com",
		title: "Email",
	},
	{
		icon: "fa-github",
		link: "https://github.com/mattcarlotta",
		title: "My Github",
	},
	{
		icon: "fa-linkedin-square",
		link: "https://www.linkedin.com/in/mattcarlotta/",
		title: "My Linkedin",
	},
];

const Footer = ({ className }) => (
	<div className={className}>
		<FlexCenter>
			<ul>
				<li css="margin-right: 20px;">
					<span>©2020 Matt Carlotta</span>
				</li>
				{FOOTERLINKS.map(({ icon, link, title }) => (
					<li key={title}>
						<a href={link} rel="noopener noreferrer" target="_blank">
							<i
								className={`fa ${icon}`}
								rel="noopener noreferrer"
								target="_blank"
							/>
							<span>{title}</span>
						</a>
					</li>
				))}
			</ul>
		</FlexCenter>
	</div>
);

Footer.propTypes = {
	className: PropTypes.string.isRequired,
};

export default Footer;
