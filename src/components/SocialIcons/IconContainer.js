import { LinkedInIcon } from "./LinkedInIcon";
import { GitHubIcon } from "./GitHubIcon";
import { StyledIconContainer } from "./IconContainer.styles.js";
import { motion } from "framer-motion";

export const IconContainer = ({ className, gitHubUrl, linkedInUrl, color }) => {
  return (
    <StyledIconContainer className={className}>
      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }}>
        <LinkedInIcon url={linkedInUrl} color={color} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }}>
        <GitHubIcon url={gitHubUrl} color={color} />
      </motion.div>
    </StyledIconContainer>
  );
};
