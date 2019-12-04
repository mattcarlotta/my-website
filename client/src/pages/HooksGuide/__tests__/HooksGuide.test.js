import HooksGuide from "../index";

const wrapper = mount(<HooksGuide />);

describe("Hooks Guide Page", () => {
	it("it renders without errors", () => {
		expect(wrapper.find("HooksGuide").exists()).toBeTruthy();
	});
});
