/* istanbul ignore file */
import styled from "styled-components";

export default styled.div`
	text-align: center;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	outline: 0;
	z-index: 100;
	${({ state }) => {
		switch (state) {
			case "enter":
			case "entering":
			case "exiting": {
				return "overflow: hidden;";
			}
			default:
				return "overflow: auto;";
		}
	}};

	&::before {
		display: inline-block;
		width: 0;
		height: 100%;
		vertical-align: middle;
		content: "";
	}
`;
