import ReactSMDE from "../index";

const wrapper = mount(<ReactSMDE />);

describe("ReactSMDE Page", () => {
	it("it renders without errors", () => {
		expect(wrapper.find("ReactSMDE").exists()).toBeTruthy();
	});
});
