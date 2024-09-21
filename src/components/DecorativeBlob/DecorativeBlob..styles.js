import styled from "styled-components";

export const DecorativeBlobStyling = styled.svg`
  position: absolute;
  right: 0;
  z-index: -1;
  top: 0;
  transform: rotate(90deg);
  @media screen and (min-width: 768px) {
    top: -3rem;
    height: 30rem;
  }
`;
