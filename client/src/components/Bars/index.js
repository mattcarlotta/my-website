/* istanbul ignore file */
import styled from "styled-components";
import Bars from "./Bars";

export default styled(Bars)`
	position: relative;
	opacity: 0.25;

	.bar1,
	.bar2,
	.bar3 {
		position: absolute;
		height: 2px;
		width: 0px;
		background: #ccc;
	}

	.bar1 {
		-webkit-animation: grow 1.5s linear infinite;
		animation: grow 1.5s linear infinite;
	}

	.bar2 {
		top: 4px;
		-webkit-animation: grow 1.65s linear infinite;
		animation: grow 1.65s linear infinite;
	}

	.bar3 {
		top: 8px;
		-webkit-animation: grow 1.75s linear infinite;
		animation: grow 1.75s linear infinite;
	}
`;
