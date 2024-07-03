import { useState } from "react";
import { StyledModal, StyledInputBox } from "./EmailForm.styles";
import { render } from "@react-email/components";
import { SES } from "@aws-sdk/client-ses";
import { FujiDigitalEmail } from "./fuji-digital-email";

export const EmailForm = () => {
  const ses = new SES({ region: process.env.AWS_SES_REGION });

  const emailHtml = render(<FujiDigitalEmail />);

  const sendEmail = async (email) => {
    const params = {
      Source: "fuji.digital.tech@gmail.com",
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: emailHtml,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "hello world",
        },
      },
    };
    await ses.sendEmail(params);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(formData.email);
  };

  return (
    <StyledModal>
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <StyledInputBox>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name here..."
            onChange={handleChange}
          ></input>
        </StyledInputBox>

        <StyledInputBox>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email here..."
            onChange={handleChange}
          ></input>
        </StyledInputBox>

        <StyledInputBox>
          <label for="description">How can we help?</label>
          <textarea
            type="textarea"
            id="description"
            placeholder="Enter question here..."
            onChange={handleChange}
          ></textarea>
        </StyledInputBox>
        <button>Hello</button>
      </form>
    </StyledModal>
  );
};
