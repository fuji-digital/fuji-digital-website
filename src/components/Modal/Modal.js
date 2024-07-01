import {
  StyledModalBackdrop,
  StyledModal,
  StyledCross,
  StyledCrossButton,
} from "./Modal.styles";
import Cross from "../../images/icons/cross-icon.svg";

export const Modal = ({ children, handleCrossClick }) => {
  return (
    <StyledModalBackdrop
      onClick={handleCrossClick}
      data-testid="close-backdrop"
    >
      <StyledModal>
        <StyledCrossButton
          onClick={handleCrossClick}
          data-testid="cross-button"
        >
          <StyledCross src={Cross} />
        </StyledCrossButton>
        {children}
      </StyledModal>
      ;
    </StyledModalBackdrop>
  );
};
