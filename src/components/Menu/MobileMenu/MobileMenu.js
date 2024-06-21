import openMenu from "../../../images/icons/burger-menu.svg";
import closeMenu from "../../../images/icons/cross-icon.svg";
import { useState } from "react";

import {
  StyledMobileMenu,
  StyledBurgerMenu,
  StyledBurgerImage,
  Menu,
} from "./MobileMenu.styles";

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledMobileMenu>
      <StyledBurgerMenu onClick={handleMenuClick}>
        <StyledBurgerImage
          src={isMenuOpen ? closeMenu : openMenu}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
          className={isMenuOpen ? "closed" : "open"}
        />
      </StyledBurgerMenu>
      <Menu>Hello</Menu>
    </StyledMobileMenu>
  );
};
