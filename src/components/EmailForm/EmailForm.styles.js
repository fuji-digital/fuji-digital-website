import styled from "styled-components";

export const StyledModal = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const StyledFujit = styled.img`
  height: 4rem;
`;

export const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  label {
    padding: 0px 0px 5px;
  }
  textarea {
    padding: 0;
    outline: none;
    box-sizing: border-box;
    resize: vertical;
    min-height: 7rem;
    background-color: #291458;
    transition: all 0.5s ease-in-out;
    border-color: ${(props) => (props.inputwarning ? "red" : "white")};
    border-radius: 6px;
    border-width: 2px;
    padding: 8px;
    border-style: solid;
    font: inherit;
    font-size: 14px;
    color: white;
  }
  input {
    padding: 0;
    outline: none;
    background-color: #291458;
    transition: all 0.5s ease-in-out;
    border-color: ${(props) => (props.inputwarning ? "red" : "white")};
    border-radius: 6px;
    border-width: 2px;
    padding: 8px;
    color: white;
    border-style: solid;
    font: inherit;
    font-size: 14px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledButton = styled.button`
  border-radius: 6px;
  width: 100%;
  height: 2rem;
  font: inherit;
  font-size: 14px;
`;

export const StyledError = styled.div`
  color: red;
  font-size: 12px;
  padding: 0.1rem 0rem 0rem 0rem;
  height: 10px;
`;
