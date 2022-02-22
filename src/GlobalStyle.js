import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background: linear-gradient(180deg,#030a1c,#080501);
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family:'Roboto', sans-serif;
}
`;
export default GlobalStyle;
