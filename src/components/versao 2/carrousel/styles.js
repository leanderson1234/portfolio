import styled from "styled-components";

export const CarrouselContainer = styled.div`
  position: relative;
`;

// max-width: 75vw;
export const CarrouselContent = styled.div`
  display: flex;
  overflow-x: auto;
  gap: ${({ gap }) => gap}px;

  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;
// width: 280px;

export const ButtonCarrouselNavigation = styled.div`
  position: absolute;
  top: calc(50% - 32px);
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  button:first-child img {
    transform: rotate(180deg);
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
