import { StyledContactButton, StyledArrowIcon } from "./ContactButton.styles";
import arrowIcon from "../../images/icons/arrow-icon.svg";

export const ContactButton = ({ text }) => {
  return (
    <StyledContactButton>
      <>{text}</>
      <StyledArrowIcon
        src={arrowIcon}
        alt="A black and white arrow"
      ></StyledArrowIcon>
    </StyledContactButton>
  );
};
