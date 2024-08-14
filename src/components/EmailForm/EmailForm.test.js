import renderer from "react-test-renderer";
import { render, screen, waitFor } from "@testing-library/react";
import { EmailForm } from "./EmailForm";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

jest.mock("@emailjs/browser", () => ({
  send: jest.fn(() => Promise.resolve({ status: 200, text: "OK" })),
}));

describe("EmailForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("matches snapshot", () => {
    const component = renderer.create(<EmailForm />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("loads thank you message when submitted", async () => {
    require("@emailjs/browser").send.mockImplementation(() =>
      Promise.resolve({ status: 200, text: "OK" })
    );

    const user = userEvent.setup();
    render(<EmailForm />);

    await act(async () => {
      await user.type(
        screen.getByRole("textbox", { description: /Name/i }),
        "John"
      );
      await user.type(
        screen.getByRole("textbox", { description: /Email/i }),
        "email@email.com"
      );
      await user.type(
        screen.getByRole("textbox", { description: /How can we help?/i }),
        "description"
      );

      await user.click(screen.getByRole("button", { name: /Submit/i }));
    });

    await waitFor(() =>
      expect(
        screen.getByText(
          "Thank you for submitting your question, our Fujits are working on an answer right away 😊"
        )
      ).toBeInTheDocument()
    );
  });

  it("checks if the input is correct and errors appear if not", async () => {
    const user = userEvent.setup();
    render(<EmailForm />);

    await act(async () => {
      const longDescriptionText = "g".repeat(501);

      await user.type(
        screen.getByRole("textbox", { description: /Name/i }),
        "a"
      );

      await user.type(
        screen.getByRole("textbox", { description: /Email/i }),
        "emailemail.com"
      );

      await user.type(
        screen.getByRole("textbox", { description: /How can we help?/i }),
        longDescriptionText
      );

      await user.click(screen.getByRole("button", { name: /submit/i }));
    });

    const nameValidationErrors = await screen.findByTestId(
      "name-error-message"
    );
    const emailValidationErrors = await screen.findByTestId(
      "email-error-message"
    );
    const descriptionValidationErrors = await screen.findByTestId(
      "description-error-message"
    );

    await waitFor(async () =>
      expect(nameValidationErrors).toHaveTextContent(
        "Please enter in your full name"
      )
    );
    await waitFor(async () =>
      expect(emailValidationErrors).toHaveTextContent(
        "Please enter in a valid email address"
      )
    );
    await waitFor(async () =>
      expect(descriptionValidationErrors).toHaveTextContent(
        "Please do not exceed 500 characters"
      )
    );

    await act(async () => {
      const longNameText = "g".repeat(51);

      await user.type(
        screen.getByRole("textbox", { description: /Name/i }),
        longNameText
      );
    });

    await waitFor(async () =>
      expect(nameValidationErrors).toHaveTextContent(
        "Please do not exceed 50 characters"
      )
    );
  }, 100000);

  it("checks if the input has been entered into", async () => {
    const user = userEvent.setup();
    render(<EmailForm />);

    await act(async () => {
      await user.click(screen.getByRole("button", { name: /submit/i }));
    });

    const nameValidationErrors = await screen.findByTestId(
      "name-error-message"
    );
    const emailValidationErrors = await screen.findByTestId(
      "email-error-message"
    );
    const descriptionValidationErrors = await screen.findByTestId(
      "description-error-message"
    );

    await waitFor(async () =>
      expect(nameValidationErrors).toHaveTextContent("Required")
    );
    await waitFor(async () =>
      expect(emailValidationErrors).toHaveTextContent("Required")
    );
    await waitFor(async () =>
      expect(descriptionValidationErrors).toHaveTextContent("Required")
    );
  });

  it("loads error message when submitted", async () => {
    require("@emailjs/browser").send.mockImplementation(() =>
      Promise.reject({ text: "FAILED" })
    );

    const user = userEvent.setup();
    render(<EmailForm />);

    await act(async () => {
      await user.type(
        screen.getByRole("textbox", { description: /Name/i }),
        "John"
      );
      await user.type(
        screen.getByRole("textbox", { description: /Email/i }),
        "email@email.com"
      );
      await user.type(
        screen.getByRole("textbox", { description: /How can we help?/i }),
        "description"
      );

      await user.click(screen.getByRole("button", { name: /Submit/i }));
    });

    await waitFor(() =>
      expect(
        screen.getByText(
          "Thank you for submitting your question, our Fujits are working on an answer right away 😊"
        )
      ).toBeInTheDocument()
    );
  });
});
