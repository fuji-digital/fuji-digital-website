import {
  StyledImageLogo,
  StyledTextLogo,
  StyledLogoContainer,
} from "./CompactLogo.styles.js";

import logo from "../../../images/logo/fuji-digital-logo.svg";
import textLogoWhite from "../../../images/logo/fuji-digital-text-logo-white.svg";

export const CompactLogo = () => {
  return (
    <StyledLogoContainer>
      <StyledImageLogo src={logo} alt="Fuji Digital Logo" />
      <StyledTextLogo
        data-testid="textLogo"
        src={textLogoWhite}
        alt="Fuji Digital Text Logo"
      />
    </StyledLogoContainer>
  );
};
