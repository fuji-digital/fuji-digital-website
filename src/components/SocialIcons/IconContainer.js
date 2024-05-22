import LinkedInIcon from "./LinkedInIcon";
import GitHubIcon from "./GitHubIcon";
import { StyledIconContainer } from "./IconContainer.styles.js";

export const IconContainer = ({ className }) => {
  return (
    <StyledIconContainer className={className}>
      <LinkedInIcon />
      <GitHubIcon />
    </StyledIconContainer>
  );
};
