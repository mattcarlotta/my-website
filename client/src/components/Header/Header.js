import React from "react";
import PropTypes from "prop-types";
import { FaEnvelope, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import FlexCenter from "components/FlexCenter";

const FOOTERLINKS = [
	{
		Icon: FaEnvelope,
		link: "mailto:carlotta.matt@gmail.com",
		title: "Email",
	},
	{
		Icon: FaGithubSquare,
		link: "https://github.com/mattcarlotta",
		title: "Github",
	},
	{
		Icon: FaLinkedinIn,
		link: "https://www.linkedin.com/in/mattcarlotta/",
		title: "Linkedin",
	},
];

const Header = ({ className }) => (
	<FlexCenter>
		<div className={className}>
			<ul className="list">
				{FOOTERLINKS.map(({ Icon, link, title }) => (
					<li className="list-item" key={title}>
						<a
							className="link"
							href={link}
							rel="noopener noreferrer"
							target="_blank"
						>
							<Icon className="icon" />
							<span className="title">{title}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	</FlexCenter>
);

Header.propTypes = {
	className: PropTypes.string.isRequired,
};

export default Header;
