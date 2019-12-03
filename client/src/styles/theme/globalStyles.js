import { createGlobalStyle } from "styled-components";
import JuraMedium from "styles/assets/fonts/Jura-Medium.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Jura Medium";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url(${JuraMedium}) format("truetype");
  }

  #root, #app, body, html {
    height: 100%;
  }

  html,body {
    height: 1180px;
    width: 100% !important;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: "Jura Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important;
    background-color: #ffffff;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  ::-moz-focus-inner {
    border: 0;
  }

  @-webkit-keyframes spinner-spin {
  	100% {
  		-webkit-transform: rotate(360deg);
  		transform: rotate(360deg);
  	}
  }

  @keyframes spinner-spin {
  	100% {
  		-webkit-transform: rotate(360deg);
  		transform: rotate(360deg);
  	}
  }

  @-webkit-keyframes spinner-fade {
  	20% {
  		opacity: 0.1;
  	}
  	40% {
  		opacity: 1;
  	}
  	60% {
  		opacity: 0.1;
  	}
  }

  @keyframes spinner-fade {
  	20% {
  		opacity: 0.1;
  	}
  	40% {
  		opacity: 1;
  	}
  	60% {
  		opacity: 0.1;
  	}
  }

  @-webkit-keyframes spin {
  	from {
  		-webkit-transform: rotate(0);
  		transform: rotate(0);
  	}
  	to {
  		-webkit-transform: rotate(359deg);
  		transform: rotate(359deg);
  	}
  }

  @keyframes spin {
  	from {
  		-webkit-transform: rotate(0);
  		transform: rotate(0);
  	}
  	to {
  		-webkit-transform: rotate(359deg);
  		transform: rotate(359deg);
  	}
  }

  @-webkit-keyframes spin3D {
  	from {
  		-webkit-transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  		transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  	}
  	to {
  		-webkit-transform: rotate3d(0deg);
  		transform: rotate3d(0deg);
  	}
  }

  @keyframes spin3D {
  	from {
  		-webkit-transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  		transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  	}
  	to {
  		-webkit-transform: rotate3d(0deg);
  		transform: rotate3d(0deg);
  	}
  }

  @-webkit-keyframes grow {
  	0% {
  		width: 0px;
  	}
  	100% {
  		width: 100px;
  	}
  }

  @keyframes grow {
  	0% {
  		width: 0px;
  	}
  	100% {
  		width: 100px;
  	}
  }

  @-webkit-keyframes zoomOut {
  	from {
  		opacity: 1;
  	}

  	50% {
  		opacity: 0;
  		-webkit-transform: scale3d(0.3, 0.3, 0.3);
  		transform: scale3d(0.3, 0.3, 0.3);
  	}

  	to {
  		opacity: 0;
  	}
  }

  @keyframes zoomOut {
  	from {
  		opacity: 1;
  	}

  	50% {
  		opacity: 0;
  		-webkit-transform: scale3d(0.3, 0.3, 0.3);
  		transform: scale3d(0.3, 0.3, 0.3);
  	}

  	to {
  		opacity: 0;
  	}
  }

  .rc-tabs {
  	box-sizing: border-box;
  	position: relative;
  	overflow: hidden;
  }

  .rc-tabs-bar,
  .rc-tabs-nav-container {
  	font-size: 14px;
  	line-height: 1.5;
  	box-sizing: border-box;
  	overflow: hidden;
  	position: relative;
  	white-space: nowrap;
  	outline: none;
  	zoom: 1;
  	transition: padding 0.45s;
  }

  .rc-tabs-ink-bar {
  	z-index: 1;
  	position: absolute;
  	box-sizing: border-box;
  	margin-top: -3px;
  	background-color: #108ee9;
  	transform-origin: 0 0;
  	width: 0;
  	height: 0;
  }

  .rc-tabs-ink-bar-animated {
  	transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1),
  		left 0.3s cubic-bezier(0.35, 0, 0.25, 1),
  		top 0.3s cubic-bezier(0.35, 0, 0.25, 1),
  		height 0.3s cubic-bezier(0.35, 0, 0.25, 1),
  		width 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  }

  .rc-tabs-tab-prev,
  .rc-tabs-tab-next {
  	-webkit-user-select: none;
  	-moz-user-select: none;
  	-ms-user-select: none;
  	user-select: none;
  	z-index: 1;
  	line-height: 36px;
  	cursor: pointer;
  	border: none;
  	background-color: transparent;
  	position: absolute;
  }

  .rc-tabs-tab-prev-icon,
  .rc-tabs-tab-next-icon {
  	position: relative;
  	display: inline-block;
  	font-style: normal;
  	font-weight: normal;
  	font-variant: normal;
  	line-height: inherit;
  	vertical-align: baseline;
  	text-align: center;
  	text-transform: none;
  	font-smoothing: antialiased;
  	text-stroke-width: 0;
  	font-family: sans-serif;

  	&:before {
  		display: block;
  	}
  }

  .rc-tabs-tab-btn-disabled {
  	cursor: default;
  	color: #ccc;
  }

  .rc-tabs-nav-wrap {
  	overflow: hidden;
  	border-top-left-radius: 5px;
  	border-top-right-radius: 5px;
  	background-color: rgba(2, 38, 64, 0.45);
  	// background-color: rgba(16, 142, 233, 0.6);
  }

  .rc-tabs-nav {
  	box-sizing: border-box;
  	padding-left: 0;
  	position: relative;
  	margin: 0;
  	float: left;
  	list-style: none;
  	display: inline-block;
  	transform-origin: 0 0;

  	&::before,
  	&::after {
  		display: table;
  		content: " ";
  	}

  	&::after {
  		clear: both;
  	}
  }

  .rc-tabs-nav-animated {
  	transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
  }

  .rc-tabs-rtl .rc-tabs-nav {
  	float: right;
  }

  .rc-tabs-tab {
  	box-sizing: border-box;
  	position: relative;
  	display: block;
  	transition: color 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  	padding: 8px 20px;
  	font-weight: 500;
  	cursor: pointer;

  	&:hover {
  		color: #a8e6fd;
  	}
  }

  .rc-tabs-tab-active,
  .rc-tabs-tab-active:hover {
  	color: #fff;
  	font-weight: bold;
  	cursor: pointer;
  	transform: translateZ(0);
  }

  .rc-tabs-content {
  	zoom: 1;
  }

  .rc-tabs-content .rc-tabs-tabpane {
  	overflow: auto;
  }

  .rc-tabs-content-animated {
  	transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1),
  		margin-left 0.3s cubic-bezier(0.35, 0, 0.25, 1),
  		margin-top 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  	display: -ms-flexbox;
  	display: flex;
  	will-change: transform;
  }

  .rc-tabs-content-animated .rc-tabs-tabpane {
  	-ms-flex-negative: 0;
  	flex-shrink: 0;
  }

  .no-flexbox .rc-tabs-content {
  	transform: none !important;
  	overflow: auto;
  }

  .no-csstransitions .rc-tabs-tabpane-inactive,
  .no-flexbox .rc-tabs-tabpane-inactive,
  .rc-tabs-content-no-animated .rc-tabs-tabpane-inactive {
  	display: none;
  }

  .rc-tabs-rtl {
  	direction: rtl;
  }

  .rc-tabs-top,
  .rc-tabs-top .rc-tabs-bar {
  	border: 0;
  	// color: #23c0fa;
  	color: #1295f3;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show {
  	opacity: 1;
  	width: 100%;
  	height: 32px;
  }

  .rc-tabs-top .rc-tabs-content {
  	width: 100%;
  }

  .rc-tabs-top .rc-tabs-nav-container-scrolling {
  	padding-left: 32px;
  	padding-right: 32px;
  }

  .rc-tabs-top .rc-tabs-nav-scroll {
  	width: 99999px;
  }

  .rc-tabs-top .rc-tabs-nav-swipe {
  	position: relative;
  	left: 0;
  }

  .rc-tabs-top .rc-tabs-nav-swipe .rc-tabs-nav {
  	display: -ms-flexbox;
  	display: flex;
  	-ms-flex: 1;
  	flex: 1;
  	width: 100%;
  }

  .rc-tabs-top .rc-tabs-nav-swipe .rc-tabs-nav .rc-tabs-tab {
  	display: -ms-flexbox;
  	display: flex;
  	-ms-flex-negative: 0;
  	flex-shrink: 0;
  	margin-right: 0;
  	padding: 8px 0;
  	-ms-flex-pack: center;
  	justify-content: center;
  }

  .rc-tabs-top .rc-tabs-nav-wrap {
  	width: 100%;
  }

  .rc-tabs-top .rc-tabs-content-animated {
  	-ms-flex-direction: row;
  	flex-direction: row;
  }

  .rc-tabs-top .rc-tabs-content-animated .rc-tabs-tabpane {
  	width: 100%;
  }

  .rc-tabs-top .rc-tabs-tab-next {
  	right: 2px;
  }

  .rc-tabs-top .rc-tabs-tab-next-icon:before {
  	content: ">";
  }

  .rc-tabs-top.rc-tabs-rtl .rc-tabs-tab-next {
  	left: 2px;
  	right: auto;
  }

  .rc-tabs-top .rc-tabs-tab-prev {
  	left: 0;
  }

  .rc-tabs-top .rc-tabs-tab-prev-icon:before {
  	content: "<";
  }

  .rc-tabs-top.rc-tabs-rtl .rc-tabs-tab-prev {
  	right: 0;
  	left: auto;
  }

  .rc-tabs-top .rc-tabs-tab-prev,
  .rc-tabs-top .rc-tabs-tab-next {
  	margin-right: -2px;
  	width: 0;
  	height: 0;
  	top: 0;
  	text-align: center;
  	opacity: 0;
  	transition: width 0.3s, height 0.3s, opacity 0.3s;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show {
  	opacity: 1;
  	width: 32px;
  	height: 100%;
  }

  .rc-tabs-top .rc-tabs-ink-bar {
  	height: 2px;
  	bottom: 0;
  	left: 0;
  }

  .rc-tabs-top.rc-tabs-rtl .rc-tabs-ink-bar {
  	right: 0;
  	left: auto;
  }

  .rc-tabs-top .rc-tabs-tab {
  	float: left;
  	height: 100%;
  	margin-right: 30px;
  }

  .rc-tabs-top.rc-tabs-rtl .rc-tabs-tab {
  	float: right;
  	margin-left: 30px;
  	margin-right: 0;
  }

  .rc-tabs-top .rc-tabs-tabpane-inactive {
  	height: 0;
  	overflow: visible;
  	opacity: 0;
  	-webkit-animation-duration: 1s;
  	animation-duration: 1s;
  	-webkit-animation-name: zoomOut;
  	animation-name: zoomOut;
  }

  .bar {
  	background-color: #d5f4ff;
  	border-radius: 3px;
  }

  .scrollbar {
  	overflow: hidden;

  	& > div:nth-child(3) {
  		width: 8px !important;
  	}
  }
`;

export default GlobalStyle;
