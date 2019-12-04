import SJSIceTeam from "../index";

const wrapper = mount(<SJSIceTeam />);

describe("SJSIceTeam Page", () => {
	it("it renders without errors", () => {
		expect(wrapper.find("SJSIceTeam").exists()).toBeTruthy();
	});
});
