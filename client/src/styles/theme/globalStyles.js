import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
`;

export default GlobalStyle;
