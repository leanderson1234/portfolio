import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 0px 24px 80px 24px;
  z-index: -1;
  @media (min-width: 1024px) {
    display: flex;
    max-width: 1440px;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

export const Perfil = styled.img`
  width: 200px;
  height: 248px;
  border-radius: 8px;
  z-index: -1;

  @media (min-width: 1024px) {
    width: 400px;
    height: 500px;
    margin-right: 16px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: -1;
`;

export const Destaque = styled.span`
  z-index: -1;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.text_config.mobile.h2.font_size};
`;

export const GrupoButao = styled.div`
  z-index: -1;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    justify-content: start;
    flex-direction: row-reverse;

    div {
      margin-right: 16px;
    }
  }
`;

export const TituloSecundario = styled.h2`
  margin-bottom: 16px;
`;

export const TituloPrincipal = styled.h1`
  margin-bottom: 16px;
`;

export const Resumo = styled.p`
  margin-bottom: 16px;
`;
