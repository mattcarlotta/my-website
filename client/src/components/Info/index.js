/* istanbul ignore file */
import styled from "styled-components";

export default styled.div`
	@media (max-width: 550px) {
		word-wrap: break-word;
		word-break: break-all;
		margin: 10px 0;

		.info {
			display: block;
		}
	}

	margin: 0;
	padding: 0;
	font-size: 14px;

	a,
	a:visited {
		color: #0096ff;
		text-decoration: none;
		transition: all 0.5s;
	}

	a:hover {
		color: #fff;
	}
`;
