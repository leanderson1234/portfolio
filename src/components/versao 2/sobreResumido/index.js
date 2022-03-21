import { ButtonPrimary } from "../buttonPrimario";
import { ButtonSecondary } from "../buttonSecondary";
import { RedesSociais } from "../redesSociais";
import {
  SectionContainer,
  Perfil,
  SocialContainer,
  Destaque,
  GrupoButao,
  TituloSecundario,
  Resumo,
  TituloPrincipal,
} from "./styles";
export const SobreResumido = () => (
  <SectionContainer id="sobreResumido">
    <div>
      <SocialContainer>
        <Perfil src="./images/eu-removebg-hd.png" alt="imagem do meu rosto" />
        <RedesSociais />
      </SocialContainer>
    </div>
    <div>
      <TituloSecundario>
        Olá, eu sou <Destaque>Leanderson</Destaque>
      </TituloSecundario>
      <TituloPrincipal>Desenvolvedor front end</TituloPrincipal>
      <Resumo>
        Desenvolvendo sites modernos com foco na acessibilidade e SEO.
      </Resumo>
      <GrupoButao>
        <ButtonSecondary href="#sobre">SOBRE</ButtonSecondary>
        <a href="/pdf/Curriculo.pdf" download>
          <ButtonPrimary>CURRICULO</ButtonPrimary>
        </a>
      </GrupoButao>
    </div>
  </SectionContainer>
);
