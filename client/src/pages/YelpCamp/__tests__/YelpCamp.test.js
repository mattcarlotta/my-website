import YelpCamp from "../index";

const wrapper = mount(<YelpCamp />);

describe("Yelp Camp Page", () => {
	it("it renders without errors", () => {
		expect(wrapper.find("YelpCamp").exists()).toBeTruthy();
	});
});
