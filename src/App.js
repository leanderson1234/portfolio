import styled from "styled-components";
import "./App.css";
import { Outlet } from "react-router-dom";
import { CustomLink } from "./components/custonLink";
import { FormEmail } from "./components/formEmail";

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
const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  margin-bottom: 24px;
`;
const FooterTitle = styled.h2`
  margin-bottom: 24px;
`;
function App() {
  return (
    <div className="App">
      <Header>
        <CardName>
          <Nome>Leanderson Santana</Nome>
        </CardName>
      </Header>
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
