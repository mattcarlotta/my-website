import NVFCApp from "../index";

const wrapper = mount(<NVFCApp />);

describe("NVFCApp Page", () => {
	it("it renders without errors", () => {
		expect(wrapper.find("NVFCApp").exists()).toBeTruthy();
	});
});
