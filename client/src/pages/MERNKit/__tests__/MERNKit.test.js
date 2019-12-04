import MERNKit from "../index";

const wrapper = mount(<MERNKit />);

describe("MERN Kit Page", () => {
	it("it renders without errors", () => {
		expect(wrapper.find("MERNKit").exists()).toBeTruthy();
	});
});
