import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FaEnvelope, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import Spinner from "components/Spinner";
import FlexCenter from "components/FlexCenter";

const FOOTERLINKS = [
	{
		Icon: FaEnvelope,
		link: "mailto:carlotta.matt@gmail.com",
		description: "My email address",
		title: "Email",
	},
	{
		Icon: FaGithubSquare,
		link: "https://github.com/mattcarlotta",
		description: "My github repository",
		title: "Github",
	},
	{
		Icon: FaLinkedinIn,
		link: "https://www.linkedin.com/in/mattcarlotta/",
		description: "My LinkedIn profile",
		title: "Linkedin",
	},
];

const Header = ({ className }) => (
	<Fragment>
		<FlexCenter>
			<div className={className}>
				<ul className="list">
					{FOOTERLINKS.map(({ description, Icon, link, title }) => (
						<li className="list-item" key={title}>
							<a
								aria-label={description}
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
		<Spinner />
	</Fragment>
);

Header.propTypes = {
	className: PropTypes.string.isRequired,
};

export default Header;
