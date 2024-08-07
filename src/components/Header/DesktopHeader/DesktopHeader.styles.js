import styled from "styled-components";
import { ContactButton } from "../../ContactButton/ContactButton";

export const StyledDesktopHeader = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  font-family: "Poppins", sans-serif;
  box-shadow: 0px 1px 2px #ccd1d1;
  margin: 0rem 0rem 2rem 0rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;

    @media screen and (min-width: 1200px) {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 1rem 3rem;
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 1200px) {
    gap: 5rem;
  }
`;

export const StyledSayHello = styled(ContactButton)`
  @media screen and (min-width: 768px) {
    grid-column: 1;
    grid-row: 3;
  }
`;
