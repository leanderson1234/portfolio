import {
  ArrowNav,
  CardName,
  Col,
  ContainerAbout,
  Footer,
  FooterTitle,
  Header,
  ImageAbout,
  ListaContainer,
  Navigation,
  Nome,
  TagTech,
  TextAbout,
  TitleSection,
  Wrapper,
  ContainerSocial,
} from "./App.styles";
import { Outlet } from "react-router-dom";
import { CustomLink } from "./components/custonLink";
import { FormEmail } from "./components/formEmail";
import { useState, useEffect } from "react";

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
          <img
            src={process.env.PUBLIC_URL + "/images/arrow-down-circle.svg"}
            alt="seta de navegação para baixo"
          />
        </ArrowNav>
      </Header>
      <Wrapper>
        <h2 id="about">Sobre mim</h2>
        <ContainerAbout>
          <Col>
            <TextAbout>
              Olá, me chamo <span>Leanderson de Oliveira Santana</span>, sou
              desenvolvedor desde 2019 amo criar soluções utilizando as
              tecnologias mais atuais do mercado. Minhas redes sociais logo
              abaixo
            </TextAbout>
            <ContainerSocial>
              <a
                href="https://www.linkedin.com/in/leanderson-santana-1227a7122/"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/icone-linkedin.svg"}
                  alt="linkedin"
                />
              </a>
              <a href="https://github.com/leanderson1234" target="_blank">
                <img
                  src={process.env.PUBLIC_URL + "/images/GitHub-Mark-64px.png"}
                  alt="github"
                />
              </a>
            </ContainerSocial>
            <h3>Stack de tecnologias:</h3>
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
            <ImageAbout
              src={process.env.PUBLIC_URL + "/images/eu.jpg"}
              alt="foto do rosto de Leanderson Santana"
            />
          </Col>
        </ContainerAbout>
        <ArrowNav href="#projects">
          <img
            src={process.env.PUBLIC_URL + "/images/arrow-down-circle.svg"}
            alt="seta de navegação para baixo"
          />
        </ArrowNav>
      </Wrapper>
      <Wrapper>
        <TitleSection id="projects">Projetos</TitleSection>
        <Navigation>
          <CustomLink to="/projetos-web">Web</CustomLink>
          <CustomLink to="/projetos-mobile">Mobile</CustomLink>
          <Outlet />
          <ArrowNav href="#form" id="contact">
            <img
              src={process.env.PUBLIC_URL + "/images/arrow-down-circle.svg"}
              alt="seta de navegação para baixo"
            />
          </ArrowNav>
        </Navigation>
      </Wrapper>
      <Footer>
        <FooterTitle>Entre em contato</FooterTitle>
        <FormEmail />
        <ArrowNav href="#about" id="form">
          <img
            src={process.env.PUBLIC_URL + "/images/arrow-up-circle-icon.svg"}
            alt="seta de navegação para cima"
          />
        </ArrowNav>
      </Footer>
    </div>
  );
}

export default App;
