import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  StyledModal,
  StyledInputBox,
  StyledButton,
  StyledButtonContainer,
  StyledForm,
  StyledFujit,
  StyledError,
} from "./EmailForm.styles";

import pinkPentagonFujit from "../../images/fujits/pink-pentagon-fujit.svg";

export const EmailForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRequirements = Yup.object().shape({
    name: Yup.string()
      .min(2, `Please enter in your full name`)
      .max(50, `Please do not exceed 50 characters`)
      .required(`Required`),
    email: Yup.string()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter in a valid email address"
      )
      .min(2, "Please enter in a valid email address")
      .max(50, "Please do not exceed 50 characters")
      .required("Required"),
    description: Yup.string()
      .max(500, "Please do not exceed 500 characters")
      .required("Required"),
  });

  const handleEmailSubmit = (values) => {
    const name = values.name;
    const email = values.email;
    const description = values.description;
    const data = {
      name,
      email,
      description,
    };

    setIsSubmitted(true);
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
        <Formik
          initialValues={{ name: ``, email: ``, description: `` }}
          validationSchema={formRequirements}
          validator={() => ({})}
          onSubmit={(values) => {
            handleEmailSubmit(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <StyledForm
              onSubmit={(event) => {
                handleSubmit(event);
                // handleEmailSubmit(event, errors);
              }}
            >
              <StyledInputBox
                inputError={errors.name && touched.name && errors.name}
              >
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name here..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                ></input>
                <StyledError>
                  {errors.name && touched.name && errors.name}
                </StyledError>
              </StyledInputBox>

              <StyledInputBox
                inputError={errors.email && touched.email && errors.email}
              >
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email here..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                ></input>
                <StyledError>
                  {errors.email && touched.email && errors.email}
                </StyledError>
              </StyledInputBox>

              <StyledInputBox
                inputError={
                  errors.description &&
                  touched.description &&
                  errors.description
                }
              >
                <label for="description">How can we help?</label>
                <textarea
                  type="textarea"
                  id="description"
                  placeholder="Enter question here..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                ></textarea>
                <StyledError>
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </StyledError>
              </StyledInputBox>
              <StyledButtonContainer>
                <StyledButton type="submit" disabled={isSubmitting}>
                  Submit
                </StyledButton>
              </StyledButtonContainer>
            </StyledForm>
          )}
        </Formik>
      )}
    </StyledModal>
  );
};
