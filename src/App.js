import styled from 'styled-components';
import './App.css';
import { Link,Outlet } from "react-router-dom";
// import {datas} from './data'

const Header = styled.header`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;
  background:linear-gradient(45deg,#082032,#2C394B,#334756,#FF4C29,#EA5C2B,#FF7F3F);
  backdrop-filter: blur(8px);
  background-size: 300% 300%;
  animation: colors 15s ease infinite;

  @keyframes colors{
    0%{
      background-position: 0% 50%;
    }
    50%{
      background-position: 100% 50%;
    }
    100%{
      background-position: 0% 50%;
    }
  }
`
const CardName = styled.div`
  border: 1px solid #fff;
  width: max-content;

`
const Nome = styled.h1`
  padding:24px;
  color: #fff;
`
const Wrapper = styled.section`
padding: min(50px,4vw);
height:100vh;
`
const Navigation = styled.nav`
  margin-top: 24px;
  margin-bottom: 24px;

  > a{
  margin-right:16px;
  text-decoration: none;
  padding:8px 24px;
  width: 50px;
  border:1px solid #334756;
  border-radius: 10px;
  color: #FF4C29;
}
a:hover{
  background: #FF4C29;
  color: #334756;
}
`
const TitleSection = styled.h2`
color: #fff;
`

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
          <Navigation >
            <Link to="/projetos-web"  >Web</Link>
            <Link to="/projetos-mobile">Mobile</Link>
            <Outlet/>
          </Navigation>
        </Wrapper>
    </div>
  );
}

export default App;
