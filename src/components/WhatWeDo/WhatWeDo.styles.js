import styled from "styled-components";

export const StyledBody = styled.div`
  background: #ebf0f7;
  font-family: "Poppins", sans-serif;
  padding: 1rem;

  p {
    color: #12388f;
    line-height: 1.2;
    padding: 1rem;
    margin: 0%;
  }

  @media screen and (min-width: 768px) {
    padding: 2.5rem;
  }
`;
export const StyledHeader = styled.div`
  color: #12388f;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledTextContainer = styled.div`
  color: #12388f;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledFujit = styled.img`
  height: 5rem;
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0rem;
  align-items: center;
  img {
    height: 4rem;
    width: 4rem;
  }
  @media screen and (min-width: 768px) {
    padding: 0rem;
  }
`;

export const StyledReverseIconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  align-items: center;
  img {
    height: 5rem;
    width: 5rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
