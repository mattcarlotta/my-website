/* istanbul ignore file */
import styled from "styled-components";
import Orbits from "./Orbits";

export default styled(Orbits)`
	position: relative;
	background-color: transparent;
	opacity: 0.15;

	.border-1,
	.border-2 {
		position: absolute;
		top: -10px;
		right: 10px;
		width: 50px;
		height: 50px;
		padding: 3px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		border-radius: 50%;
	}

	.border-1 {
		background: -webkit-gradient(
			linear,
			left bottom,
			left top,
			color-stop(33%, rgba(63, 249, 220, 0.1)),
			to(rgba(63, 249, 220, 1))
		);
		background: -o-linear-gradient(
			bottom,
			rgba(63, 249, 220, 0.1) 33%,
			rgba(63, 249, 220, 1) 100%
		);
		background: linear-gradient(
			0deg,
			rgba(63, 249, 220, 0.1) 33%,
			rgba(63, 249, 220, 1) 100%
		);
		-webkit-animation: spin3D 1.8s linear 0s infinite;
		animation: spin3D 1.8s linear 0s infinite;
		z-index: -1;
	}

	.core-1,
	.core-2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.border-2 {
		background: -webkit-gradient(
			linear,
			left bottom,
			left top,
			color-stop(33%, rgba(255, 171, 145, 0.1)),
			to(rgba(255, 171, 145, 1))
		);
		background: -o-linear-gradient(
			bottom,
			rgba(255, 171, 145, 0.1) 33%,
			rgba(255, 171, 145, 1) 100%
		);
		background: linear-gradient(
			0deg,
			rgba(255, 171, 145, 0.1) 33%,
			rgba(255, 171, 145, 1) 100%
		);
		-webkit-animation: spin3D 2.2s linear 0s infinite;
		animation: spin3D 2.2s linear 0s infinite;
		z-index: -1;
	}

	.core-1 {
		background-color: rgba(11, 142, 208, 0.47);
	}

	.core-2 {
		background-color: rgba(113, 171, 199, 0.67);
	}
`;
