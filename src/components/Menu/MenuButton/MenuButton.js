import openMenu from "../../../images/icons/burger-menu.svg";
import closeMenu from "../../../images/icons/cross-icon.svg";

import { StyledMenuButton, StyledMenuImage } from "./MenuButton.styles";

export const MenuButton = ({ isMenuOpen, handleMenuClick }) => {
  return (
    <StyledMenuButton onClick={handleMenuClick}>
      <StyledMenuImage
        src={isMenuOpen ? closeMenu : openMenu}
        alt={isMenuOpen ? "Close menu" : "Open menu"}
        className={isMenuOpen ? "closed" : "open"}
      />
    </StyledMenuButton>
  );
};
