import { Container, LinkIcone } from "./styles";

export const RedesSociais = () => (
  <Container>
    <LinkIcone
      href="https://www.linkedin.com/in/leanderson-santana-1227a7122/"
      target="_blank"
    >
      <img
        src="./images/icone-linkedin.svg"
        alt="icone do linkedin clique para acessar meu linkedin"
      />
    </LinkIcone>
    <LinkIcone href="https://github.com/leanderson1234" target="_blank">
      <img
        src="./images/icone-github.svg"
        alt="icone do github clique para acessar meu github"
      />
    </LinkIcone>
    <LinkIcone href="mailto:leandersondesenvolvedor@gmail.com" target="_blank">
      <img
        src="./images/icone-gmail.svg"
        alt="icone do gmail clique para me enviar um email"
      />
    </LinkIcone>
    <LinkIcone
      href="http://api.whatsapp.com/send?1=pt_BR&phone=5571987991420"
      target="_blank"
    >
      <img
        src="./images/icone-whatsapp.svg"
        alt="icone do whatsapp clique para falar comigo pelo whatsapp"
      />
    </LinkIcone>
  </Container>
);
