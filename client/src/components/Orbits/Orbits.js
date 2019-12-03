import React from "react";
import PropTypes from "prop-types";
import FlexCenter from "components/FlexCenter";

const Orbits = ({ className }) => (
	<FlexCenter className={className}>
		<div className="border-1">
			<div className="core-1"></div>
		</div>
		<div className="border-2">
			<div className="core-2"></div>
		</div>
	</FlexCenter>
);

Orbits.propTypes = {
	className: PropTypes.string.isRequired,
};

export default Orbits;
