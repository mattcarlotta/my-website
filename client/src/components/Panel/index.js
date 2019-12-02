import React from "react";
import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars";
import PanelContainer from "components/PanelContainer";

const Panel = ({ children }) => (
	<PanelContainer>
		<Scrollbars
			className="scrollbar"
			thumbSize={400}
			autoHeightMax={600}
			renderThumbVertical={props => <div {...props} className="bar" />}
			style={{ height: 860 }}
		>
			<div css="padding: 20px;">{children}</div>
		</Scrollbars>
	</PanelContainer>
);

Panel.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Panel;