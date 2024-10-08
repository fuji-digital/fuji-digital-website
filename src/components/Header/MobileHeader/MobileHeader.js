import { useState } from "react";

import {
  StyledMobileHeader,
  Menu,
  MenuBackdrop,
  StyledContactButton,
  StyledPinkFujit,
  StyledContactUs,
} from "./MobileHeader.styles";
import { CompactLogo } from "../../Logo/CompactLogo/CompactLogo";
import { MenuButton } from "../../Menu/MenuButton/MenuButton";
import pinkPentagonFujit from "../../../images/fujits/pink-pentagon-fujit.svg";

export const MobileHeader = ({ handleModalClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <StyledMobileHeader>
        <CompactLogo />
        <MenuButton isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
      </StyledMobileHeader>
      {isMenuOpen && (
        <>
          <MenuBackdrop onClick={handleMenuClick} data-testid="menu-backdrop" />
          <Menu data-testid="menu">
            <a onClick={handleMenuClick} href="#what-we-do">
              What we do
            </a>
            <a onClick={handleMenuClick} href="#who-are-we">
              Who are we
            </a>
            <hr />
            <StyledContactUs>
              <StyledContactButton
                text="Say Hello"
                handleModalClick={handleModalClick}
                onClick={handleMenuClick}
              />
              <StyledPinkFujit src={pinkPentagonFujit} aria-hidden="true" />
            </StyledContactUs>
          </Menu>
        </>
      )}
    </div>
  );
};
