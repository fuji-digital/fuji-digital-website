import styled from "styled-components";

export const PageStyling = styled.div`
  position: relative;
  overflow-x: hidden;

  h1 {
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    color: #ebf0f7;
    line-height: 1.2;
    @media screen and (min-width: 1200px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: #ebf0f7;
    line-height: 1.2;
    @media screen and (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }
`;

export const Header = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: normal;
    padding: 1rem 3rem;
  }
`;
export const BlobStyling = styled.img`
  position: absolute;
  right: 0;
  top: 7rem;
  z-index: -1;
  height: 10rem;
  @media screen and (min-width: 768px) {
    top: -1rem;
    height: 30rem;
    right: -3rem;
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
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;
export const DesigningImage = styled.img`
  height: 11rem;
  @media screen and (min-width: 768px) {
    height: 30vw;
  }
`;
export const TextContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const PinkRoundShortFujit = styled.img`
  height: 4rem;
  display: block;
  margin: auto;
  @media screen and (min-width: 768px) {
    margin: 1rem 0;
    height: 8vw;
  }
`;
