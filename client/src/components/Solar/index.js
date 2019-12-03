/* istanbul ignore file */
import styled from "styled-components";
import Solar from "./Solar";

export default styled(Solar)`
	position: relative;
	background-color: transparent;
	z-index: -1;
	opacity: 0.15;

	.solar-system {
		position: absolute;
		top: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.orbit {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #ffffffa5;
		border-radius: 50%;
	}

	.earth-orbit {
		width: 665px;
		height: 665px;
		-webkit-animation: spin 12s linear 0s infinite;
	}

	.venus-orbit {
		width: 420px;
		height: 420px;
		-webkit-animation: spin 7.4s linear 0s infinite;
	}

	.mercury-orbit {
		width: 190px;
		height: 190px;
		-webkit-animation: spin 3s linear 0s infinite;
	}

	.planet {
		position: absolute;
		top: -5px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #3ff9dc;
	}

	.sun {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background-color: #ffab91;
	}
`;
