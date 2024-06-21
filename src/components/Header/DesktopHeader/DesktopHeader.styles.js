import styled from "styled-components";

export const StyledDesktopHeader = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: normal;

  @media screen and (min-width: 768px) {
    padding: 1rem 3rem;
  }
`;
