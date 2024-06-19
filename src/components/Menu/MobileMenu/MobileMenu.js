import burgerMenu from "../../../images/icons/burger-menu.svg";

import { StyledBurgerMenu, StyledBurgerImage } from "./MobileMenu.styles";

export const MobileMenu = () => {
  return (
    <StyledBurgerMenu>
      <StyledBurgerImage src={burgerMenu} />
    </StyledBurgerMenu>
  );
};
