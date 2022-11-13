import styled, { createGlobalStyle } from "styled-components";
import { device, colors } from "styles/theme";


const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${colors.darkGray};
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
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
    background-color: ${colors.darkGray};
    &::-webkit-scrollbar {
    display: none;
  }
  }

  // 이미지 드래그 방지
  img {
   pointer-events: none;
  }

  // 채널톡 모달 클릭시 아래 깔리도록 처리
  #ch-plugin-core {
    div{
      z-index: 1 !important;
    }
  }

  // 채널톡 초기 플로팅 버튼
  /* #ch-plugin-launcher {
    img {
      width: 18rem !important;
      height: auto !important;
      ${device.ipad129Half} {
        width: 16rem !important;
        height: auto !important;
      }
    }
  } */

  // 채널톡 버튼 클릭시 뜨는 창
  #ch-plugin-script {
    height: 50% !important;
    ${device.ipad129Half} {
      width: 70% !important;
    }
    ${device.ipadAirQuarter} {
      width: 100% !important;
      height: 100% !important;
    }
    z-index: 1 !important;
  }
`;

export default GlobalStyle;
