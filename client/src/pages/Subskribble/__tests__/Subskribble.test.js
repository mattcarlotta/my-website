import Subskribble from "../index";

const wrapper = mount(<Subskribble />);

describe("Subskribble Page", () => {
	it("it renders without errors", () => {
		expect(wrapper.find("Subskribble").exists()).toBeTruthy();
	});
});
