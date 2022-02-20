import styled, { keyframes, css } from "styled-components";
import "./App.css";
import { Outlet } from "react-router-dom";
import { CustomLink } from "./components/custonLink";
import { FormEmail } from "./components/formEmail";
import { useState, useEffect } from "react";
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    45deg,
    #082032,
    #2c394b,
    #334756,
    #ff4c29,
    #ea5c2b,
    #ff7f3f
  );
  backdrop-filter: blur(8px);
  background-size: 300% 300%;
  animation: colors 15s ease infinite;

  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const CardName = styled.div`
  border: 1px solid #fff;
  width: max-content;
  border-radius: 8px;
`;
const Nome = styled.h1`
  padding: 24px;
  color: #fff;
`;
const Wrapper = styled.section`
  padding: min(50px, 4vw);
  min-height: 100vh;
`;
const Navigation = styled.nav`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const TitleSection = styled.h2`
  color: #082032;
`;
const ContainerAbout = styled.section`
  margin-top: 24px;
  display: flex;
  justify-content: space-around;
  align-items: start;
`;

const TextAbout = styled.p`
  width: max(400px, 48vw);
`;

const ImageAbout = styled.img`
  border-radius: 8px;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  margin-bottom: 48px;
`;
const FooterTitle = styled.h2`
  margin-bottom: 24px;
`;
const slash = keyframes`
  from {
  transform:translateX(-100vw);
  }
  to {
    transform:translateX(0);
  }
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
  min-width: 178px;
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
      </Header>
      <Wrapper>
        <h2>Sobre mim</h2>
        <ContainerAbout>
          <div>
            <TextAbout>
              Olá, me Chamo <span>Leanderson de Oliveira Santana</span>, sou
              desenvolvedor desde 2019 amo criar soluções utilizando as
              tecnologias mais atuais do mercado.Minha stack de tecnologias
              estão logo abaixo =D
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
          </div>
          <ImageAbout src={process.env.PUBLIC_URL + "/images/eu.jpg"} />
        </ContainerAbout>
      </Wrapper>
      <Wrapper>
        <TitleSection>Projetos</TitleSection>
        <Navigation>
          <CustomLink to="/projetos-web">Web</CustomLink>
          <CustomLink to="/projetos-mobile">Mobile</CustomLink>
          <Outlet />
        </Navigation>
      </Wrapper>
      <Footer>
        <FooterTitle>Entre em contato</FooterTitle>
        <FormEmail />
      </Footer>
    </div>
  );
}

export default App;
