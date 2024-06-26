import styled from "styled-components";
import { ContactButton } from "../../ContactButton/ContactButton";

export const StyledMobileHeader = styled.div`
  padding: 1.5rem 2rem 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem 2.5rem;
  background-color: #291458;
  right: 0;
  color: white;
  height: 15rem;
  position: absolute;
  top: 6rem;
  right: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: translateY(0%);

  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
  }

  hr {
    color: white;
    width: 100vw;
    margin-left: -2.5rem;
  }
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

export const StyledContactButton = styled(ContactButton)`
  width: 10rem;
  padding: 0.8rem;
  justify-content: space-evenly;
`;

export const StyledPinkFujit = styled.img`
  height: 4rem;
`;

export const StyledContactUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
