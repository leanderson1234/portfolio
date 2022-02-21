import styled, { css } from "styled-components";
import "./App.css";
import { Outlet } from "react-router-dom";
import { CustomLink } from "./components/custonLink";
import { FormEmail } from "./components/formEmail";
import { useState, useEffect } from "react";
import { colors, slash, toggle } from "./keyframes";

const Header = styled.header`
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

const CardName = styled.div`
  border: 1px solid #fff;
  width: max-content;
  border-radius: 8px;

  animation: ${slash} 3s ease;
`;
const Nome = styled.h1`
  padding: 24px;
  color: #fff;
`;
const Wrapper = styled.section`
  background: linear-gradient(180deg, #030a1c, #080501);
  color: #fff;
  padding: min(50px, 4vw);
  position: relative;
  text-align: center;
`;
const Navigation = styled.nav`
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

const TitleSection = styled.h2`
  color: #fff;
`;
const ContainerAbout = styled.section`
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

const TextAbout = styled.p`
  width: 100%;
  text-align: justify;
  span {
    font-weight: bold;
  }
`;

const ImageAbout = styled.img`
  border-radius: 8px;
  width: 300px;
`;
const Col = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
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
const FooterTitle = styled.h2`
  margin-bottom: 24px;
`;

const ListaContainer = styled.div`
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

const TagTech = styled.div`
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

const ArrowNav = styled.a`
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

function App() {
  const [show, setShow] = useState({ toggle: "" });
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 430) {
      setShow({
        toggle: "show",
      });
    }
  };
  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <div className="App">
      <Header>
        <CardName>
          <Nome>Leanderson Santana</Nome>
        </CardName>
        <ArrowNav href="#about">
          <img src={process.env.PUBLIC_URL + "/images/arrow-down-circle.svg"} />
        </ArrowNav>
      </Header>
      <Wrapper>
        <h2 id="about">Sobre mim</h2>
        <ContainerAbout>
          <Col>
            <TextAbout>
              Olá, me Chamo <span>Leanderson de Oliveira Santana</span>, sou
              desenvolvedor desde 2019 amo criar soluções utilizando as
              tecnologias mais atuais do mercado.Minha stack de tecnologias
              estão logo abaixo.
            </TextAbout>
            <ListaContainer show={show.toggle}>
              <TagTech>
                <img
                  src={process.env.PUBLIC_URL + "/images/icone-html5.svg"}
                  alt="html"
                />
                <span>HTML</span>
              </TagTech>
              <TagTech>
                <img
                  src={process.env.PUBLIC_URL + "/images/icone-css.svg"}
                  alt="css"
                />
                <span>CSS</span>
              </TagTech>
              <TagTech>
                <img
                  src={process.env.PUBLIC_URL + "/images/icone-js.svg"}
                  alt="javascript"
                />
                <span>JAVASCRIPT</span>
              </TagTech>
              <TagTech>
                <img
                  src={process.env.PUBLIC_URL + "/images/icone-node.svg"}
                  alt="node"
                />
                <span>NODE</span>
              </TagTech>
              <TagTech>
                <img
                  src={process.env.PUBLIC_URL + "/images/icone-react.svg"}
                  alt="react"
                />
                <span>REACTJS</span>
              </TagTech>
              <TagTech>
                <img
                  src={process.env.PUBLIC_URL + "/images/icone-dart.svg"}
                  alt="dart"
                />
                <span>DART</span>
              </TagTech>
              <TagTech>
                <img
                  src={process.env.PUBLIC_URL + "/images/icone-flutter.svg"}
                  alt="flutter"
                />
                <span>FLUTTER</span>
              </TagTech>
            </ListaContainer>
          </Col>
          <Col>
            <ImageAbout src={process.env.PUBLIC_URL + "/images/eu.jpg"} />
          </Col>
          <ArrowNav href="#projects">
            <img
              src={process.env.PUBLIC_URL + "/images/arrow-down-circle.svg"}
            />
          </ArrowNav>
        </ContainerAbout>
      </Wrapper>
      <Wrapper>
        <TitleSection id="projects">Projetos</TitleSection>
        <Navigation>
          <CustomLink to="/projetos-web">Web</CustomLink>
          <CustomLink to="/projetos-mobile">Mobile</CustomLink>
          <Outlet />
          <ArrowNav href="#contact" id="contact">
            <img
              src={process.env.PUBLIC_URL + "/images/arrow-down-circle.svg"}
            />
          </ArrowNav>
        </Navigation>
      </Wrapper>
      <Footer>
        <FooterTitle id="contact">Entre em contato</FooterTitle>
        <FormEmail />
        <ArrowNav href="#about">
          <img
            src={process.env.PUBLIC_URL + "/images/arrow-up-circle-icon.svg"}
          />
        </ArrowNav>
      </Footer>
    </div>
  );
}

export default App;
