import ModalContainer from "../index";

const wrapper = mount(
	<ModalContainer>
		{(_, toggleModal) => (
			<button type="button" onClick={toggleModal}>
				Click me
			</button>
		)}
	</ModalContainer>,
);

describe("Modal Container", () => {
	it("it renders without errors", () => {
		expect(wrapper.find("button").exists()).toBeTruthy();
	});

	it("toggled isOpen state", () => {
		wrapper.find("button").simulate("click");

		expect(wrapper.state("isOpen")).toBeTruthy();
	});
});
