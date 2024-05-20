import LinkedInIcon from "./LinkedInIcon";
import GitHubIcon from "./GitHubIcon";
import { StyledIconContainer } from "./Icon.styles.js";

export default Icon = ({ className }) => {
  return (
    <StyledIconContainer className={className}>
      <LinkedInIcon />
      <GitHubIcon />
    </StyledIconContainer>
  );
};
