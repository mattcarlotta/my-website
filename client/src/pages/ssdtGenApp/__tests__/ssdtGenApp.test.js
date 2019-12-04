import SSDTGenApp from "../index";

const wrapper = mount(<SSDTGenApp />);

describe("SSDTGen App Page", () => {
	it("it renders without errors", () => {
		expect(wrapper.find("SSDTGenApp").exists()).toBeTruthy();
	});
});
