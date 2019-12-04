import Modal from "../index";

const onClick = jest.fn();

const initProps = {
	children: <h1>Example Modal Content</h1>,
	isOpen: false,
	onClick,
};

const wrapper = mount(
	<Modal {...initProps}>
		<span>Hello</span>
	</Modal>,
);

describe("Modal", () => {
	it("initially renders nothing", () => {
		expect(wrapper.find("ModalContainer").exists()).toBeFalsy();
	});

	it("renders a modal with some sample content without errors", () => {
		wrapper.setProps({ isOpen: true });
		expect(wrapper.find("ModalContainer").exists()).toBeTruthy();
	});

	it("calls a passed in 'onClick' prop function", () => {
		wrapper.setProps({ onClick });

		wrapper.find("button").simulate("click");
		expect(onClick).toHaveBeenCalled();
	});

	it("closes the modal", () => {
		wrapper.setProps({ isOpen: false });
		expect(wrapper.find("ModalContainer").exists()).toBeFalsy();
	});
});
