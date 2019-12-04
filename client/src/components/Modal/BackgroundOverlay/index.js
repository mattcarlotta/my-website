/* istanbul ignore file */
import styled from "styled-components";

export default styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 3;
	position: fixed;
	-ms-touch-action: none;
	touch-action: none;
	background-color: rgba(0, 0, 0, 0.5);
	-webkit-tap-highlight-color: transparent;
	-webkit-backdrop-filter: blur(5px);
	backdrop-filter: blur(5px);
	-webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	-o-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	opacity: 1;
`;
