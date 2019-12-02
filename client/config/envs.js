const { ANALZYER, APIPORT, NODE_ENV, NODE_ENV_DEV, PORT } = process.env;

const inDevelopment = NODE_ENV === "development";
const inStaging = NODE_ENV_DEV === "staging";
const baseURL =
	inDevelopment || inStaging
		? `http://localhost:${APIPORT}/api/`
		: "https://mattcarlotta.io/";

module.exports = {
	analzye: ANALZYER /*  boolean to use bundle analyzer */,
	APIPORT /* current API port */,
	baseURL /* current API base URL */,
	currentDirectory: process.cwd() /* current working directory */,
	inDevelopment /* in development environment */,
	inStaging /* in development environment */,
	localIdentName:
		"[local]___[hash:base64:5]" /* how class names will be defined in the DOM */,
	NODE_ENV /* current environment */,
	PORT /* application's current port */,
};
