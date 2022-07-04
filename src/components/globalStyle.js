import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
    text-decoration:none;
  }

  body{
    background-color:#111;
    color:#fff;
    font-family: sans-serif;
    overflow-x:hidden;
`;