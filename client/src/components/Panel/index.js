import React from "react";
import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars";
import PanelContainer from "components/PanelContainer";
import Bars from "components/Bars";
import Orbits from "components/Orbits";
import Solar from "components/Solar";

const Panel = ({ children }) => (
	<PanelContainer>
		<Solar />
		<Scrollbars
			className="scrollbar"
			autoHide
			autoHideTimeout={300}
			thumbSize={200}
			renderThumbVertical={props => <div {...props} className="bar" />}
		>
			<div css="padding: 30px;">
				<Bars />
				<Orbits />
				{children}
			</div>
		</Scrollbars>
	</PanelContainer>
);

Panel.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Panel;
