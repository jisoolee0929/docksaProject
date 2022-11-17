export const margins = {
    s: "0.5rem",
    sm: "0.8rem",
    base: "1.2rem",
    md: "1.8rem",
    lg: "2.4rem",
    body: "3.4rem",
    xl: "4.7rem",
  };
  
  export const paddings = {
    sm: "0.8rem",
    base: "1.2rem",
    lg: "2.4rem",
    body: "3.4rem",
    xl: "4.7rem",
  };
  
  export const fonts = {
    size: {
      small: "1.2rem",
      sm: "1.3rem",
      middle: "1.4rem",
      ml: "1.5rem",
      base: "1.7rem",
      title: "2rem",
      maintitle: "2.5rem",
    },
    weight: {
      light: 200,
      normal: 500,
      bold: 700,
    },
  };
  
  export const colors = {
    whiteGray: "#e5e5e5",
    lightGray: "#C4C4C4",
    gray: "#838586",
    midGray: "#6a6a6a",
    bgGray: "#4a4a4a",
    semiDarkGray: "#3F4144",
    semiDarkGrayFonts: "#95989A",
    darkGray: "#2a2c2e",
    deepGray: "#161718",
    pastelPurple: "#B4A4FF",
    purple: "#8064FC",
    black: "#222427",
    red: "#FF6969",
  };
  
  export const size = {
    galaxtFold: "280px",
    ipad129Quarter: "375px",
    phone: "428px",
    ipadAirQuarter: "438px",
    ipad129Half: "678px",
    ipad129MidFull: "981px",
    ipad129Full: "1366px",
    ipad129Vertical: "1024px",
  };
  
  // 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수
  export const device = {
    galaxtFold: `@media only screen and (max-width: ${size.galaxtFold})`,
    ipadAirQuarter: `@media only screen and (max-width: ${size.ipadAirQuarter})`,
    phone: `@media only screen and (max-width: ${size.phone})`,
    ipad129Quarter: `@media only screen and (max-width: ${size.ipad129Quarter})`,
    ipad129Half: `@media only screen and (max-width: ${size.ipad129Half})`,
    ipad129MidFull: `@media only screen and (max-width: ${size.ipad129MidFull})`,
    ipad129Full: `@media only screen and (max-width: ${size.ipad129Full})`,
    ipad129Vertical: `@media only screen and (max-width: ${size.ipad129Vertical})`,
    ipad129: `@media only screen and (max-width: 760px)`,
    // ipad400: `@media only screen and (max-width: 400px)`,
  };
  
  //테마에 따라 다른 값을 갖는 색상 값
  export const lightThemeColors = {
    ...colors,
    primary: "#333",
    secondary: "#fff",
    tertiary: "#808080",
  };
  
  export const darkThemeColors = {
    ...colors,
    primary: "#fff",
    secondary: "#333",
    tertiary: "#d4d0c4",
  };
  
  // 테마와 관련없이 공통으로 사용되는 변수들
  export const defalutTheme = {
    margins,
    paddings,
    fonts,
    device,
  };
  
  // 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 가짐
  export const darkTheme = {
    ...defalutTheme,
    colors: darkThemeColors,
  };
  
  export const lightTheme = {
    ...defalutTheme,
    colors: lightThemeColors,
  };
  