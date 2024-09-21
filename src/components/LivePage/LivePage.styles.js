import styled from "styled-components";
import { ContactButton } from "../ContactButton/ContactButton.js";
import { Modal } from "../Modal/Modal.js";

export const PageStyling = styled.div`
  position: relative;
  overflow-x: hidden;

  h1 {
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    color: #ebf0f7;
    line-height: 1.2;
    @media screen and (min-width: 1200px) {
      font-size: 1.8rem;
    }
  }

  h3 {
    color: #ebf0f7;
    font-family: "Poppins", sans-serif;
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: #ebf0f7;
    line-height: 1.2;
  }
`;

export const Body = styled.div`
  padding: 0rem 2.5rem 2.5rem 2.5rem;

  @media screen and (min-width: 768px) {
    padding: 0rem 2rem 2rem 2rem;
  }
`;

export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 3fr 1fr;
    column-gap: 10px;
  }
`;

export const HashtagTag = styled.div`
  background-color: white;
  width: fit-content;
  height: fit-content;
  font-size: 0.9rem;
  border-radius: 50px;
  text-align: center;
  padding: 0.2rem 1rem;
  @media screen and (min-width: 768px) {
    grid-row: 1;
    grid-column: 1;
    align-self: end;
  }
`;

export const DiscussingImage = styled.img`
  height: 11rem;
  @media screen and (min-width: 768px) {
    height: 30vw;
    grid-column: 2;
    grid-row: 1 / 4;
    align-self: center;
    justify-self: center;
  }
`;
export const TextContainer = styled.div`
  @media screen and (min-width: 768px) {
    grid-column: 1;
    grid-row: 2 / 3;
    padding: 0rem 0rem 1rem;
  }
`;

export const StyledContactButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: left;
  }
`;

export const StyledContactButton = styled(ContactButton)`
  @media screen and (min-width: 768px) {
    grid-column: 1;
    grid-row: 3;
  }
`;

export const StyledModal = styled(Modal)`
  @media screen and (min-width: 768px) {
    width: 38rem;
  }
`;
