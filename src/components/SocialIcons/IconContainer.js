import { LinkedInIcon } from "./LinkedInIcon";
import { GitHubIcon } from "./GitHubIcon";
import { StyledIconContainer } from "./IconContainer.styles.js";

export const IconContainer = ({ className, gitHubUrl, linkedInUrl, color }) => {
  return (
    <StyledIconContainer className={className}>
      <LinkedInIcon url={linkedInUrl} color={color} />
      <GitHubIcon url={gitHubUrl} color={color} />
    </StyledIconContainer>
  );
};
