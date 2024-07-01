import { StyledContactButton, StyledArrowIcon } from "./ContactButton.styles";
import arrowIcon from "../../images/icons/arrow-icon.svg";

export const ContactButton = ({ text, className, handleModalClick }) => {
  return (
    <StyledContactButton
      className={className}
      data-testid="contact-button"
      onClick={handleModalClick}
    >
      <div>{text}</div>
      <StyledArrowIcon
        src={arrowIcon}
        alt="A black and white arrow"
      ></StyledArrowIcon>
    </StyledContactButton>
  );
};
