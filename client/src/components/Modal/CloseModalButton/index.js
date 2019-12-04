/* istanbul ignore file */
import styled from "styled-components";

export default styled.button`
	cursor: pointer;
	color: #eee;
	border: 0;
	height: 25px;
	width: 25px;
	top: 12px;
	right: 16px;
	position: absolute;
	background-color: transparent;
	-webkit-font-smoothing: auto;
	-webkit-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	font-size: 20px;

	&:hover {
		opacity: 0.5;
	}

	&:focus {
		outline: none;
	}
`;
