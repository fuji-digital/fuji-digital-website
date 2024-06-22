import { useState } from "react";

import { StyledMobileHeader, Menu, MenuBackdrop } from "./MobileHeader.styles";
import { CompactLogo } from "../../Logo/CompactLogo/CompactLogo";
import { MenuButton } from "../../Menu/MenuButton/MenuButton";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <StyledMobileHeader>
        <CompactLogo />
        <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </StyledMobileHeader>
      {isMenuOpen && (
        <>
          <MenuBackdrop /> <Menu>HelloWorld</Menu>
        </>
      )}
    </div>
  );
};
