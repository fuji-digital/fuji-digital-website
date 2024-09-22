import { motion } from "framer-motion";
import { StyledContactButton, StyledArrowIcon } from "./ContactButton.styles";
import arrowIcon from "../../images/icons/arrow-icon.svg";

export const ContactButton = ({
  text,
  className,
  handleModalClick,
  onClick = () => {},
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      <StyledContactButton
        className={className}
        data-testid="contact-button"
        onClick={() => {
          handleModalClick();
          onClick();
        }}
      >
        <div>{text}</div>
        <StyledArrowIcon
          src={arrowIcon}
          alt="A black and white arrow"
        ></StyledArrowIcon>
      </StyledContactButton>
    </motion.div>
  );
};
