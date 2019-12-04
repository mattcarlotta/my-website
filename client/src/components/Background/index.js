/* istanbul ignore file */
import styled from "styled-components";
import bg from "images/bg.jpg";

export default styled.div`
	position: absolute;
	width: 100%;
	height: 1000px;
	max-width: 2000px;
	background: url(${bg});
	background-size: 100%;
	padding: 0 10px;
	background-position: bottom;
	background-repeat: no-repeat;
	z-index: -1;
`;
