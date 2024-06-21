import styled from "styled-components";

export const StyledMobileMenu = styled.div``;
export const StyledBurgerMenu = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  outline: inherit;
`;

export const StyledBurgerImage = styled.img`
  height: 3rem;
  transition: transform 0.3s ease; // Add transition effect

  &.open {
    transform: rotate(0deg);
  }

  &.closed {
    transform: rotate(90deg); // Add a rotate effect for example
  }
`;

export const Menu = styled.div`
  background-color: #291458;
  top: 0;
  right: 0;
  color: white;
  height: 4rem;
`;
