import { StyledMobileHeader } from "./MobileHeader.styles";
import { CompactLogo } from "../../Logo/CompactLogo/CompactLogo";
import { MobileMenu } from "../../Menu/MobileMenu/MobileMenu";

export const MobileHeader = () => {
  return (
    <StyledMobileHeader>
      <CompactLogo />
      <MobileMenu />
    </StyledMobileHeader>
  );
};
