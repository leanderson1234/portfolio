import styled from "styled-components";

export const Menu = styled.div`
  width: 64px;
  height: 64px;
  background: #4576f4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 0 0 #4576f4, 0 0 0 0 #4576f4;
  transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);

  position: relative;

  ${({ toggleMenu }) =>
    toggleMenu
      ? `
    box-shadow: 0 0 0 130vw #4576f4, 0 0 0 130vh #4576f4;
    z-index: 999;
`
      : `
      :hover {
        box-shadow: 0 0 0 8px #4576f4, 0 0 0 8px #4576f4;
      }`};
`;

export const Hamburger = styled.span`
  position: relative;
  display: block;
  background: ${({ theme }) => theme.color.text_primary_light};
  width: 32px;
  height: 4px;
  transition: 0.5s ease-in-out;

  &:before,
  &:after {
    background: ${({ theme }) => theme.color.text_primary_light};
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }
  &:before {
    top: -10px;
  }
  &:after {
    bottom: -10px;
  }

  ${({ toggleMenu }) =>
    toggleMenu
      ? `

    transform: rotate(45deg);
  `
      : ``};

  ${({ toggleMenu }) =>
    toggleMenu
      ? `
  :before {
    transform: rotate(90deg);
    top: 0;
  }
`
      : ``};

  ${({ toggleMenu }) =>
    toggleMenu
      ? `
  :after {
    transform: rotate(90deg);
    bottom: 0;
}
`
      : ``};
`;
export const MenuLinkContainer = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.25s 0.1s cubic-bezier(0, 1.07, 0, 1.02);
  z-index: 999999;
  ${({ toggleMenu }) =>
    toggleMenu
      ? `
    opacity: 1;
`
      : ``};
`;

export const LinkMenu = styled.li`
  margin-bottom: 8px;
`;
export const LinkItem = styled.a`
  font-family: "${({ theme }) => theme.text_config.mobile.text.font_family}";
  font-style: ${({ theme }) => theme.text_config.mobile.text.font_style};
  font-weight: ${({ theme }) => theme.text_config.mobile.text.font_weight};
  font-size: ${({ theme }) => theme.text_config.mobile.text.font_size};
  line-height: ${({ theme }) => theme.text_config.mobile.text.line_height};
  color: ${({ theme }) => theme.color.text_primary_light};
  text-decoration: none;

  :active ${LinkMenu} ${MenuLinkContainer} label ${Menu} {
    opacity: 0;
  }
`;
// export const CheckMenu = styled.input`
//   display: none;
// `;

// :checked ~ label ${Hamburger} {
//   transform: rotate(45deg);
// }

// :checked ~ label ${Hamburger}:before {
//   transform: rotate(90deg);
//   top: 0;
// }
// :checked ~ label ${Hamburger}:after {
//   transform: rotate(90deg);
//   bottom: 0;
// }
// :checked ~ label ${Menu} {
//   box-shadow: 0 0 0 130vw #4576f4, 0 0 0 130vh #4576f4;
//   z-index: 999;
// }
// :checked ~ ${MenuLinkContainer} {
//   opacity: 1;
// }
