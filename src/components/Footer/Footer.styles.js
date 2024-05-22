import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { IconContainer } from "../SocialIcons/IconContainer";
import { StyledImageLogo, StyledTextLogo } from "../Logo/Logo.styles";

export const StyledFooter = styled.div`
  background: #ebf0f7;
  padding: 1rem;
  color: #545454;
  font-family: "Poppins", sans-serif;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledLogo = styled(Logo)`
  column-gap: 1rem;
  justify-content: left;

  ${StyledImageLogo} {
    height: 4.5rem;
  }
  ${StyledTextLogo} {
    height: 3.5rem;
  }
  @media screen and (min-width: 768px) {
    order: 1;
    width: 50%;
    flex-basis: 50%;
  }
`;

export const StyledFooterBody = styled.div`
  padding: 1rem;
  color: #5f00f8;
  font-weight: bold;
  a {
    font-weight: normal;
  }
  @media screen and (min-width: 768px) {
    order: 3;
    flex-grow: 1;
  }
`;

export const StyledIcon = styled(IconContainer)`
  @media screen and (min-width: 768px) {
    order: 2;
    width: 50%;
    flex-basis: 50%;
  }
`;

export const StyledFooterCopyright = styled.div`
  padding: 3rem 0rem 0rem;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    order: 4;
    width: 100%;
    flex-grow: 1;
  }
`;

export const StyledFooterBlobs = styled.img`
  position: absolute;
  right: -8rem;
  bottom: 4rem;
  height: 12rem;
  @media screen and (min-width: 768px) {
    bottom: 0;
    right: -2rem;
  }
`;

export const StyledPinkFujit = styled.img`
  position: absolute;
  right: 1rem;
  bottom: 8rem;
  height: 5rem;
  @media screen and (min-width: 768px) {
    bottom: 4rem;
    right: 6rem;
    height: 6rem;
  }
`;
