import { motion } from "framer-motion";
import {
  StyledDesktopHeader,
  StyledMenu,
  StyledSayHello,
} from "./DesktopHeader.styles";
import { StandardLogo } from "../../Logo/StandardLogo/StandardLogo";

export const DesktopHeader = ({ handleModalClick }) => {
  return (
    <StyledDesktopHeader>
      <StyledMenu>
        <StandardLogo />
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }}>
          <a href="#what-we-do">What We Do</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }}>
          <a href="#who-are-we">Who Are We</a>
        </motion.div>
      </StyledMenu>

      <StyledSayHello text="Say Hello" handleModalClick={handleModalClick} />
    </StyledDesktopHeader>
  );
};
