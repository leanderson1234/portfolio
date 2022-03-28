import { Buttom, ContainerButton } from "./styles";

export const ButtonSecondary = ({ children, href, target }) => (
  <ContainerButton>
    <Buttom href={href} target={target}>
      {children}
    </Buttom>
  </ContainerButton>
);
