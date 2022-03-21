import styled from "styled-components";

export const Container = styled.section`
  background-image: url(./images/background.svg);
  background-repeat: no-repeat;
  padding: 112px 24px 80px 24px;
  background-size: cover;

  @media (min-width: 1024px) {
    background-image: url(./images/Union-desktop.svg);
    max-width: 1440;
  }
`;

export const GrupoTecnologias = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const IconeTecnologiaContainer = styled.button`
  width: 88px;
  height: 88px;
  border-radius: 8px;
  margin: 8px 8px 8px 0px;
  background: ${({ theme }) => theme.color.primary_dark};
  border: none;
  :focus {
    background: rgba(255, 255, 255, 0.1);
    img {
      opacity: 0.5;
    }
  }
  :hover {
    box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.color.text_primary_light};
  }
`;
export const InfoTec = styled.p`
  margin-bottom: 8px;
`;

export const Icone = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  margin-top: 80px;
  @media (min-width: 1024px) {
    text-align: center;
  }
`;

export const Subtitle = styled.h3`
  margin: 8px 0px 8px 0px;
`;

export const Warning = styled.span`
  color: ${({ theme }) => theme.color.text_primary_light};
`;
export const Info = styled.div`
  width: 100%;
  padding: 8px;

  h3 {
    text-align: center;
    color: ${({ theme }) => theme.color.text_primary_light};
  }
  p {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.color.text_primary_light};
  }
`;

export const Item = styled.article`
  width: 312px;
  flex: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.primary_dark};

  @media (min-width: 1024px) {
    width: 480px;
  }
`;
export const ImageProject = styled.img`
  height: 328px;
  max-width: 100%;
`;

export const TitleContainer = styled.div`
  margin-bottom: 8px;
  background: rgba(245, 121, 93, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const ContainerButtonAcessar = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: ${({ theme }) => theme.color.text_primary_light};
  }
`;
// text-align: center;
// position: absolute;
//   bottom: 0;
export const FigureProject = styled.figure`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const Wrapper = styled.section`
  margin-bottom: 80px;
  p {
    color: ${({ theme }) => theme.color.text_primary_light};
  }
  @media (min-width: 1024px) {
    p {
      max-width: 720px;
    }
    form {
      display: flex;
      align-items: center;
    }
    input {
      width: 480px;
    }
    textarea {
      width: 480px;
    }
  }
`;
export const ServiceItem = styled.article`
  width: calc(100% - 8px);
  min-height: 200px;
  background: ${({ theme }) => theme.color.primary_dark};
  border-radius: 8px;
  flex: none;
  margin-top: 8px;

  figure {
    display: flex;
    justify-content: center;
    padding: 16px;
  }
  @media (min-width: 1024px) {
    width: 480px;
  }
`;

export const ServiceIcon = styled.img`
  width: 88px;
  height: 88px;
`;

export const ServiceInfo = styled.div`
  text-align: center;
  p,
  h3 {
    color: ${({ theme }) => theme.color.text_primary_light};
  }
  div {
    text-align: left;
    padding: 8px;
  }
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;
