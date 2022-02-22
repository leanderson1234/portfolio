import { keyframes } from "styled-components";

export const colors = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const slash = keyframes`
  from {
  transform:translateX(-100vw);
  }
  to {
    transform:translateX(0);
  }
`;

export const toggle = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const rotateY = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;
