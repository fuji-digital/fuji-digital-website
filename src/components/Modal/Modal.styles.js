import styled from "styled-components";

export const StyledModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0rem;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 5, 0.8);
  transition: all 0.3s ease-in-out;
`;

export const StyledCrossButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  outline: inherit;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const StyledCross = styled.img`
  position: absolute;
  right: 0rem;
  height: 2rem;
`;

export const StyledModal = styled.div`
  z-index: 1000;
  position: fixed;
  top: 4rem;
  padding: 1.5rem 2rem;
  width: 75%;
  height: fit-content;
  background-color: #291458;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  border-radius: 1.5rem;
`;
