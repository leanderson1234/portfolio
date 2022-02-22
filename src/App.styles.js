import styled, { css } from "styled-components";
import { colors, slash, toggle } from "./keyframes";

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    45deg,
    #080501,
    #030a1c,
    #334756,
    #ff4c29,
    #ea5c2b
  );
  backdrop-filter: blur(8px);
  background-size: 300% 300%;
  animation: ${colors} 8s ease infinite;
`;

export const CardName = styled.div`
  border: 1px solid #fff;
  width: max-content;
  border-radius: 8px;

  animation: ${slash} 3s ease;
`;
export const Nome = styled.h1`
  padding: 24px;
  color: #fff;
`;
export const Wrapper = styled.section`
  background: linear-gradient(180deg, #030a1c, #080501);
  color: #fff;
  padding: min(50px, 4vw);
  position: relative;
  text-align: center;
`;
export const Navigation = styled.nav`
  margin-top: 24px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    > #contact {
      display: none;
    }
    > main {
      justify-content: center;
    }
  }
`;

export const TitleSection = styled.h2`
  color: #fff;
`;
export const ContainerAbout = styled.section`
  position: relative;
  height: 90vh;
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: start;
  > div {
    max-width: 50%;
    margin-bottom: 16px;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
    align-items: center;

    > img {
      margin-bottom: 16px;
    }
    > div {
      max-width: 100%;
    }
    > a {
      display: none;
    }
  }
`;

export const TextAbout = styled.p`
  width: 100%;
  text-align: justify;
  span {
    font-weight: bold;
  }
`;

export const ImageAbout = styled.img`
  border-radius: 8px;
  width: 300px;
`;
export const Col = styled.div`
  flex: 1;
`;

export const Footer = styled.footer`
  background: linear-gradient(180deg, #030a1c, #080501);
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
  text-align: center;

  justify-content: center;
`;
export const FooterTitle = styled.h2`
  margin-bottom: 24px;
`;

export const ListaContainer = styled.div`
  display: none;
  flex-wrap: wrap;
  margin-top: 24px;
  img {
    height: 50px;
    margin-right: 16px;
  }
  ${(props) =>
    props.show
      ? css`
          display: flex;
          animation: ${slash} 2s ease;
        `
      : ""};
`;

export const TagTech = styled.div`
  background: #334756;
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  width: fit-content;
  margin-right: 8px;
  max-width: 172px;
`;

export const ArrowNav = styled.a`
  position: absolute;
  bottom: 0;
  opacity: 1;
  ${css`
    animation: ${toggle} 0.8s infinite ease;
  `}
  > img {
    width: 56px;
  }
`;
