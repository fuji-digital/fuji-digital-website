import styled from "styled-components";

export const StyledMobileHeader = styled.div`
  padding: 1.5rem 2rem 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  background-color: #291458;
  right: 0;
  color: white;
  height: 4rem;
  position: absolute;
  top: 6rem;
  right: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: translateY(0%);
`;

export const MenuBackdrop = styled.div`
  position: absolute;
  top: 6rem;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #000005;
  transition: all 0.3s ease-in-out;
  opacity: 0.8;
`;
