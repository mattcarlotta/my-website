import React from "react";
import { FaGithub } from "react-icons/fa";
import Panel from "components/Panel";
import SubTitle from "components/SubTitle";
import Title from "components/Title";
import SJSIceTeamImage from "images/sjsiceteam.png";

const SJSIceTeam = () => (
	<Panel>
		<Title>
			<a
				css="margin-right: 8px;"
				href="https://sjsiceteam.com"
				rel="noopener noreferrer"
				target="_blank"
			>
				SJS Ice Team
			</a>
			<a
				css="position: relative;top: 2px;font-size: 15px;"
				href="https://github.com/mattcarlotta/SJSITApp"
				rel="noopener noreferrer"
				target="_blank"
			>
				<FaGithub />
			</a>
		</Title>
		<SubTitle>
			An application to consolidate Google forms, Excel, and PDFs into a single,
			unified, semi-automated month-to-month scheduling service for 25+ members
			of the San Jose Sharks Ice Team.
		</SubTitle>
		<img width="100%" src={SJSIceTeamImage} alt="sjsiceteam.png" />
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
			clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
			amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
			nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
			diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
			Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
			sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
			diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
			erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
			rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
			dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate
			velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
			at vero eros et accumsan et iusto odio dignissim qui blandit praesent
			luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem
			ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
			euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
			enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
			lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
			iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
			illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
			odio dignissim qui blandit praesent luptatum zzril delenit augue duis
			dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis
			eleifend option congue nihil imperdiet doming id quod mazim placerat facer
			possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
			sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
			erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
			ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
			Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
			molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero
			eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
			gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
			ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
			tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
			clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
			amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam
			aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed
			tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna
			no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor
			sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
			diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
			erat.
		</p>
	</Panel>
);

export default SJSIceTeam;
