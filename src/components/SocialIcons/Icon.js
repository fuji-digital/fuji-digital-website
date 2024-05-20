import LinkedInIcon from "./LinkedInIcon";
import GitHubIcon from "./GitHubIcon";
import { StyledIconContainer } from "./Icon.styles.js";

export default ({ className }) => {
  return (
    <StyledIconContainer className={className}>
      <LinkedInIcon />
      <GitHubIcon />
    </StyledIconContainer>
  );
};
