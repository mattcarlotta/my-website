import React from "react";
import PropTypes from "prop-types";
import FlexCenter from "components/FlexCenter";

const Spinner = ({ className }) => (
	<FlexCenter className={className}>
		<div className="spinner" />
	</FlexCenter>
);

Spinner.propTypes = {
	className: PropTypes.string.isRequired,
};

export default Spinner;
