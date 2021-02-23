import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
  rootElement
);
