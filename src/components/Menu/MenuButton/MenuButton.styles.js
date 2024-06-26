import styled from "styled-components";

export const StyledMenuButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  outline: inherit;
`;

export const StyledMenuImage = styled.img`
  height: 3rem;
  transition: transform 0.3s ease; // Add transition effect

  &.open {
    transform: rotate(0deg);
  }

  &.closed {
    transform: rotate(90deg); // Add a rotate effect for example
  }
`;
