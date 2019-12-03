import React from "react";
import PropTypes from "prop-types";
import FlexCenter from "components/FlexCenter";

const Solar = ({ className }) => (
	<FlexCenter className={className}>
		<div className="solar-system">
			<div className="earth-orbit orbit">
				<div className="planet earth"></div>
				<div className="venus-orbit orbit">
					<div className="planet venus"></div>
					<div className="mercury-orbit orbit">
						<div className="planet mercury"></div>
						<div className="sun"></div>
					</div>
				</div>
			</div>
		</div>
	</FlexCenter>
);

Solar.propTypes = {
	className: PropTypes.string.isRequired,
};

export default Solar;
