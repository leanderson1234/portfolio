import styled from "styled-components";

export const Buttom = styled.a`
  padding: 24px 48px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  background: none;
  text-decoration: none;
  color: ${({ theme }) => theme.color.text_primary_dark};
`;
export const ContainerButton = styled.div`
  display: flex;
`;
