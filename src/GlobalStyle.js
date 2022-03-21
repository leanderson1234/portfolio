import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }
  a{
    text-decoration: none;
  }

  h1{
    font-family: '${({ theme }) => theme.text_config.mobile.h1.font_family}';
    font-style: ${({ theme }) => theme.text_config.mobile.h1.font_style};
    font-weight: ${({ theme }) => theme.text_config.mobile.h1.font_weight};
    font-size: ${({ theme }) => theme.text_config.mobile.h1.font_size};
    line-height: ${({ theme }) => theme.text_config.mobile.h1.line_height};
    color: ${({ theme }) => theme.color.primary_dark};
    
    @media(min-width: 1024px) {
      font-family: '${({ theme }) => theme.text_config.desktop.h1.font_family}';
      font-style: ${({ theme }) => theme.text_config.desktop.h1.font_style};
      font-weight: ${({ theme }) => theme.text_config.desktop.h1.font_weight};
      font-size: ${({ theme }) => theme.text_config.desktop.h1.font_size};
      line-height: ${({ theme }) => theme.text_config.desktop.h1.line_height};
    }
  }

  h2{
    font-family: '${({ theme }) => theme.text_config.mobile.h2.font_family}';
    font-style: ${({ theme }) => theme.text_config.mobile.h2.font_style};
    font-weight: ${({ theme }) => theme.text_config.mobile.h2.font_weight};
    font-size: ${({ theme }) => theme.text_config.mobile.h2.font_size};
    line-height: ${({ theme }) => theme.text_config.mobile.h2.line_height};
    color: ${({ theme }) => theme.color.text_primary_dark};

    @media(min-width: 1024px) {
      font-family: '${({ theme }) => theme.text_config.desktop.h2.font_family}';
      font-style: ${({ theme }) => theme.text_config.desktop.h2.font_style};
      font-weight: ${({ theme }) => theme.text_config.desktop.h2.font_weight};
      font-size: ${({ theme }) => theme.text_config.desktop.h2.font_size};
      line-height: ${({ theme }) => theme.text_config.desktop.h2.line_height};
    }
  }

  h3{
    font-family: '${({ theme }) => theme.text_config.mobile.h3.font_family}';
    font-style: ${({ theme }) => theme.text_config.mobile.h3.font_style};
    font-weight: ${({ theme }) => theme.text_config.mobile.h3.font_weight};
    font-size: ${({ theme }) => theme.text_config.mobile.h3.font_size};
    line-height: ${({ theme }) => theme.text_config.mobile.h3.line_height};
    color: ${({ theme }) => theme.color.text_primary_dark};

    @media(min-width: 1024px) {
      font-family: '${({ theme }) => theme.text_config.desktop.h3.font_family}';
      font-style: ${({ theme }) => theme.text_config.desktop.h3.font_style};
      font-weight: ${({ theme }) => theme.text_config.desktop.h3.font_weight};
      font-size: ${({ theme }) => theme.text_config.desktop.h3.font_size};
      line-height: ${({ theme }) => theme.text_config.desktop.h3.line_height};
    }
  }

  p,span{
    font-family: '${({ theme }) => theme.text_config.mobile.text.font_family}';
    font-style: ${({ theme }) => theme.text_config.mobile.text.font_style};
    font-weight: ${({ theme }) => theme.text_config.mobile.text.font_weight};
    font-size: ${({ theme }) => theme.text_config.mobile.text.font_size};
    line-height: ${({ theme }) => theme.text_config.mobile.text.line_height};
    color: ${({ theme }) => theme.color.text_primary};

    @media(min-width: 1024px) {
      font-family: '${({ theme }) =>
        theme.text_config.desktop.text.font_family}';
      font-style: ${({ theme }) => theme.text_config.desktop.text.font_style};
      font-weight: ${({ theme }) => theme.text_config.desktop.text.font_weight};
      font-size: ${({ theme }) => theme.text_config.desktop.text.font_size};
      line-height: ${({ theme }) => theme.text_config.desktop.text.line_height};
    }
  }
  li{
    list-style-type: none;
  }
`;
export default GlobalStyle;
// body{
//   background: linear-gradient(180deg,#030a1c,#080501);
// }
// *{
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
//   font-family:'Roboto', sans-serif;
// }
