import openMenu from "../../../images/icons/burger-menu.svg";
import closeMenu from "../../../images/icons/cross-icon.svg";

import {
  StyledMobileMenu,
  StyledBurgerMenu,
  StyledBurgerImage,
} from "./MenuButton.styles";

export const MenuButton = ({ isMenuOpen, setIsMenuOpen }) => {
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
    </StyledMobileMenu>
  );
};
