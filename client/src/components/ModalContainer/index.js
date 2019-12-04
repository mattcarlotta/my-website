import { Component } from "react";
import PropTypes from "prop-types";

class ModalContainer extends Component {
	state = { isOpen: false };

	toggleModal = () =>
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));

	render = () => this.props.children(this.state.isOpen, this.toggleModal);
}

ModalContainer.propTypes = {
	children: PropTypes.func.isRequired,
};

export default ModalContainer;
