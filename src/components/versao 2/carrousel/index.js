import {
  ButtonCarrouselNavigation,
  CarrouselContainer,
  CarrouselContent,
} from "./styles";
import { useRef } from "react";

export const Carrousel = ({ children }) => {
  const carousel = useRef(0);
  const gap = 8;

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth + gap;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth + gap;
  };

  return (
    <CarrouselContainer>
      <CarrouselContent ref={carousel} gap={gap}>
        {children}
      </CarrouselContent>
      <ButtonCarrouselNavigation>
        <button onClick={handleLeftClick}>
          <img src="./images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img
            src="./images/216151_right_chevron_icon.png"
            alt="Scroll Right"
          />
        </button>
      </ButtonCarrouselNavigation>
    </CarrouselContainer>
  );
};
