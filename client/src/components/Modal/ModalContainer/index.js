/* istanbul ignore file */
import styled from "styled-components";

export default styled.div`
	max-width: ${({ maxWidth }) => maxWidth || "100%"};
	width: 100%;
	top: 0;
	display: inline-block;
	padding: 20px 5%;
	text-align: left;
	vertical-align: middle;
	-webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	-o-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	opacity: 1;
`;
