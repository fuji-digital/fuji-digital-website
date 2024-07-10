import { useState } from "react";

import {
  StyledModal,
  StyledInputBox,
  StyledButton,
  StyledButtonContainer,
  StyledForm,
  StyledFujit,
} from "./EmailForm.styles";

import pinkPentagonFujit from "../../images/fujits/pink-pentagon-fujit.svg";

export const EmailForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    const name = event.target[0].value;
    const email = event.target[1].value;
    const description = event.target[2].value;
    const data = {
      name,
      email,
      description,
    };
    setIsSubmitted(true);

    event.preventDefault();
  };

  return (
    <StyledModal>
      <h3>Contact Us</h3>
      <StyledFujit src={pinkPentagonFujit} alt="A Pink mascot waving" />
      {isSubmitted ? (
        <p>
          Thank you for submitting your question, our Fujits are working on an
          answer right away 😊
        </p>
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputBox>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name here..."
            ></input>
          </StyledInputBox>

          <StyledInputBox>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email here..."
            ></input>
          </StyledInputBox>

          <StyledInputBox>
            <label for="description">How can we help?</label>
            <textarea
              type="textarea"
              id="description"
              placeholder="Enter question here..."
            ></textarea>
          </StyledInputBox>
          <StyledButtonContainer>
            <StyledButton>Submit</StyledButton>
          </StyledButtonContainer>
        </StyledForm>
      )}
    </StyledModal>
  );
};
