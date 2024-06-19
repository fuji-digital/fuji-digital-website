import styled from "styled-components";
import { IconContainer } from "../SocialIcons/IconContainer";

export const StyledBody = styled.div`
  background: #13072e;
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  color: #ffffff;
  h3 {
    margin: 0;
  }
`;

export const CardContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 10px;
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
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: 1200px) {
    flex-basis: 50%;
  }
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

export const StyledIconContainer = styled(IconContainer)`
  flex-direction: column;
  align-self: end;
`;

export const StyledAboutMe = styled.p`
  align-self: flex-start;
`;
