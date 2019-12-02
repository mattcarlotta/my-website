import { JSDOM } from "jsdom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { sleep } from "utils";
import { HOCWrap, shallowWrap } from "utils/testing";
import mockApp from "utils/__mocks__/mockAxios.js";
import "jest-styled-components";

configure({ adapter: new Adapter() });

/*
THE BELOW ARE ACCESSIBLE AND PREDEFINED FOR ALL *.TEST.JS FILES
WARNING: Due to the below being accessible to the global DOM,
         all *.test.js files will have custom rules for ESLint.
         Otherwise, ESLint will throw errors that the functions/
         modules are undefined because they are not explictly
         imported! See "overrides" in ".eslintrc" for more
         information.
*/
const exposedProperties = ["window", "navigator", "document"];
const { document } = new JSDOM("").window;
global.document = document;
global.window = document.defaultView;
global.HTMLElement = window.HTMLElement;
global.HTMLAnchorElement = window.HTMLAnchorElement;
global.sleep = sleep;
global.HOCWrap = HOCWrap;
global.shallow = shallowWrap;
global.mount = mount;
global.mockApp = mockApp;
global.React = require("react");
global.Provider = require("react-redux").Provider;
global.ConnectedRouter = require("connected-react-router").ConnectedRouter;
global.Router = require("react-router").MemoryRouter;
global.Route = require("react-router-dom").Route;
global.Switch = require("react-router-dom").Switch;

Object.keys(document.defaultView).forEach(property => {
	if (typeof global[property] === "undefined") {
		exposedProperties.push(property);
		global[property] = document.defaultView[property];
	}
});

global.navigator = {
	userAgent: "node.js",
};
