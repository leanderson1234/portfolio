import { useState } from "react";
import { ContainerOnda } from "../components/versao 2/containerOnda";
import { Header } from "../components/versao 2/header";
import { MainContainer } from "../components/versao 2/main/styles";
import { SobreResumido } from "../components/versao 2/sobreResumido";
import {
  Hamburger,
  LinkItem,
  LinkMenu,
  Menu,
  MenuLinkContainer,
} from "./styles";

export const Versao2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <Header>
        <img src="./logo.svg" alt="logo do site" />
        {/* <CheckMenu id="checkMenu" type="checkbox" /> */}
        {/* <label htmlFor="checkMenu"> */}
        <Menu onClick={handleMenu} toggleMenu={toggleMenu}>
          <Hamburger toggleMenu={toggleMenu}></Hamburger>
        </Menu>
        {/* </label> */}
        <MenuLinkContainer toggleMenu={toggleMenu}>
          <LinkMenu>
            <LinkItem href="#sobreResumido" onClick={handleMenu}>
              HOME
            </LinkItem>
          </LinkMenu>
          <LinkMenu>
            <LinkItem href="#sobre" onClick={handleMenu}>
              SOBRE
            </LinkItem>
          </LinkMenu>
          <LinkMenu>
            <LinkItem href="#projetos" onClick={handleMenu}>
              PROJETOS
            </LinkItem>
          </LinkMenu>
          <LinkMenu>
            <LinkItem href="#servicos" onClick={handleMenu}>
              SERVIÇOS
            </LinkItem>
          </LinkMenu>
          <LinkMenu>
            <LinkItem href="#contatos" onClick={handleMenu}>
              CONTATOS
            </LinkItem>
          </LinkMenu>
        </MenuLinkContainer>
      </Header>
      <MainContainer>
        <SobreResumido />
        <ContainerOnda />
      </MainContainer>
    </>
  );
};
