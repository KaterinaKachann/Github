import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    width: 100%;
    height: 100%;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    cursor: pointer;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
 

`;
