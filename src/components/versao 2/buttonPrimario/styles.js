import styled from "styled-components";

export const Buttom = styled.button`
  width: 144px;
  height: 68px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
`;
