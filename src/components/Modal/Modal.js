import {
  StyledModalBackdrop,
  StyledModal,
  StyledCross,
  StyledCrossButton,
  StyledModalContainer,
} from "./Modal.styles";
import Cross from "../../images/icons/cross-icon.svg";

export const Modal = ({ children, className, handleCrossClick }) => {
  return (
    <StyledModalContainer>
      <StyledModalBackdrop
        onClick={handleCrossClick}
        data-testid="close-backdrop"
      />
      <StyledModal className={className}>
        <StyledCrossButton
          onClick={handleCrossClick}
          data-testid="cross-button"
        >
          <StyledCross src={Cross} alt="Close modal" />
        </StyledCrossButton>
        {children}
      </StyledModal>
      ;
    </StyledModalContainer>
  );
};
