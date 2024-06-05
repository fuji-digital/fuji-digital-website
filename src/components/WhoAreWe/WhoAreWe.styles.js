import styled from "styled-components";

export const StyledBody = styled.div`
  background: #13072e;
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  color: #ffffff;
  h3 {
    margin: 0;
  }
`;

export const StyledHeader = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const StyledInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const StyledStaffPhoto = styled.img`
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
  height: 8rem;
  width: 8rem;
`;
