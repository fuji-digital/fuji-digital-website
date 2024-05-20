import {
  StyledImageLogo,
  StyledTextLogo,
  StyledLogoContainer,
} from "./Logo.styles.js";

import logo from "../../images/logo/fuji-digital-logo.svg";
import textLogoWhite from "../../images/logo/fuji-digital-text-logo-white.svg";
import textLogoPurple from "../../images/logo/fuji-digital-text-logo-purple.svg";

export default Logo = ({ version, className }) => {
  let textLogo = version === "purple" ? textLogoPurple : textLogoWhite;
  return (
    <StyledLogoContainer className={className}>
      <StyledImageLogo src={logo} alt="Fuji Digital Logo" />
      <StyledTextLogo
        data-testid="textLogo"
        src={textLogo}
        alt="Fuji Digital Text Logo"
      />
    </StyledLogoContainer>
  );
};
