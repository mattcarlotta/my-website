import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Info from "components/Info";

const FileDetails = ({ destination, fileName, source, status }) => (
	<Fragment>
		<Info style={{ marginTop: 20 }}>
			<span className="info">File:&nbsp;</span>
			{fileName}
		</Info>
		<Info>
			<span className="info">Status:&nbsp;</span>
			{status}
		</Info>
		<Info>
			<span className="info">Destination:&nbsp;</span>
			<a
				href={destination.link}
				rel="noopener noreferrer"
				target="_blank"
				aria-label="Link to hosted website"
			>
				{destination.text}
			</a>
		</Info>
		<Info>
			<span className="info">Source:&nbsp;</span>
			<a
				href={source}
				rel="noopener noreferrer"
				target="_blank"
				aria-label="Link to source code"
			>
				github
			</a>
		</Info>
	</Fragment>
);

FileDetails.propTypes = {
	fileName: PropTypes.string.isRequired,
	destination: PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string.isRequired,
	}).isRequired,
	status: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
};

export default FileDetails;
