import { FormEmail } from "../form";
// import { ButtonPrimary } from "../buttonPrimario";
import { Carrousel } from "../carrousel";
import {
  Container,
  ContainerButtonAcessar,
  FigureProject,
  GrupoTecnologias,
  Icone,
  IconeTecnologiaContainer,
  ImageProject,
  Info,
  InfoTec,
  Item,
  ServiceIcon,
  ServiceInfo,
  ServiceItem,
  Subtitle,
  Title,
  TitleContainer,
  Warning,
  Wrapper,
  ServiceContainer,
} from "./styles";
import { datas } from "../../../data";
import { useState } from "react";
import { ButtonSecondary } from "../buttonSecondary";
export const ContainerOnda = () => {
  const [infoTec, setInfoTec] = useState("");

  const infoTecnologics = (tec) => {
    switch (tec) {
      case "js":
        setInfoTec(
          "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web"
        );
        break;
      case "react":
        setInfoTec(
          "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros."
        );
        break;
      case "css":
        setInfoTec(
          "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos. "
        );
        break;
      case "html5":
        setInfoTec(
          "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML."
        );
        break;
      case "git":
        setInfoTec(
          "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
        );
        break;
      case "nextjs":
        setInfoTec(
          "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React."
        );
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Wrapper id="sobre">
        <Title>Sobre</Title>
        <p>
          Sou desenvolvedor desde 2019 onde trabalhei em uma das maiores startup
          de salvador, onde aprendi diversas tecnologias e me apaixonei por
          front end
        </p>
        <Subtitle>Tecnologias utilizadas</Subtitle>
        {infoTec != "" ? (
          <InfoTec>{infoTec}</InfoTec>
        ) : (
          <Warning>Clique na tecnologia para saber mais!</Warning>
        )}

        <GrupoTecnologias>
          <IconeTecnologiaContainer
            onClick={() => infoTecnologics("js")}
            infoTec={infoTec}
          >
            <Icone
              src="./images/icone-js.svg"
              alt="icone da logo do Javascript"
            />
          </IconeTecnologiaContainer>
          <IconeTecnologiaContainer onClick={() => infoTecnologics("react")}>
            <Icone
              src="./images/icone-react.svg"
              alt="icone da logo do React"
            />
          </IconeTecnologiaContainer>
          <IconeTecnologiaContainer onClick={() => infoTecnologics("css")}>
            <Icone src="./images/icone-css.svg" alt="icone da logo do CSS" />
          </IconeTecnologiaContainer>
          <IconeTecnologiaContainer onClick={() => infoTecnologics("html5")}>
            <Icone
              src="./images/icone-html5.svg"
              alt="icone da logo do html5"
            />
          </IconeTecnologiaContainer>
          <IconeTecnologiaContainer onClick={() => infoTecnologics("git")}>
            <Icone src="./images/icone-git.svg" alt="icone da logo do git" />
          </IconeTecnologiaContainer>
          <IconeTecnologiaContainer onClick={() => infoTecnologics("nextjs")}>
            <Icone
              src="./images/icone-nextjs.svg"
              alt="icone da logo do nextjs"
            />
          </IconeTecnologiaContainer>
        </GrupoTecnologias>
      </Wrapper>
      <Wrapper id="projetos">
        <Title>Projetos</Title>
        <Carrousel>
          {datas.map((projects) => {
            if (projects.type === "web") {
              return (
                <Item key={projects.id}>
                  <FigureProject>
                    <ImageProject
                      loading="lazy"
                      src={projects.image}
                      alt={projects.title}
                    />
                  </FigureProject>
                  <Info>
                    <TitleContainer>
                      <h3>{projects.title}</h3>
                    </TitleContainer>
                    <p>{projects.description}</p>
                    <ContainerButtonAcessar>
                      <ButtonSecondary href={projects.url} target="_blank">
                        ACESSAR
                      </ButtonSecondary>
                    </ContainerButtonAcessar>
                  </Info>
                </Item>
              );
            }
          })}
        </Carrousel>
      </Wrapper>
      <Wrapper id="servicos">
        <Title>Serviços</Title>
        {/* <Carrousel> */}
        <ServiceContainer>
          <ServiceItem>
            <figure>
              <ServiceIcon
                src="./images/icone-ui-ux.svg"
                alt="Projeto easybank"
              />
            </figure>
            <ServiceInfo>
              <h3>UX/UI</h3>
              <div>
                <p>
                  Decisões de design de UX são orientadas por pesquisa, análise
                  de dados e resultados de testes, em vez de preferências e
                  opiniões estéticas.
                </p>
              </div>
            </ServiceInfo>
          </ServiceItem>
          <ServiceItem>
            <figure>
              <ServiceIcon
                src="./images/icone-ui-ux.svg"
                alt="Projeto easybank"
              />
            </figure>
            <ServiceInfo>
              <h3>Front end</h3>
              <div>
                <p>
                  Desenvolvimento da interface gráfica do usuário de um site,
                  por meio do uso de HTML5, CSS3 e JavaScript com a biblioteca
                  ReactJs
                </p>
              </div>
            </ServiceInfo>
          </ServiceItem>
        </ServiceContainer>
        {/* </Carrousel> */}
      </Wrapper>
      <Wrapper>
        <Title>Contato</Title>
        <FormEmail />
      </Wrapper>
    </Container>
  );
};
