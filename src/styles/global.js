import styled, { createGlobalStyle } from "styled-components";
import { device, colors } from "./theme";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Mingijuk';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105@1.1/Mingijuk.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  html {
    background-color: #f5f5f5;
    font-family: 'Mingijuk';
    font-size: 10px;
    ${device.ipad129Half} {
      font-size: 8.5px;
    }
  }

  *{
    box-sizing: border-box;
    &::-webkit-scrollbar {
    display: none;
  }
  }

  body {
    top: env(safe-area-inset-top);
    /* height: 100%; */
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    user-select: none;
    overflow-y: scroll;
    /* overflow-y: hidden; */
    -webkit-overflow-scrolling: touch;
    background-color: #f5f5f5;
    &::-webkit-scrollbar {
    display: none;
  }
  }

  // 이미지 드래그 방지
  img {
   pointer-events: none;
  }





`;

export default GlobalStyle;
