import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { ContactButton } from "./ContactButton";

jest.mock(`framer-motion`, () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    div: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  },
}));

describe("ContactButton", () => {
  it("matches snapshot", () => {
    const component = renderer
      .create(<ContactButton text="the button" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it("text inside button is correct", () => {
    render(<ContactButton text="Contact Us" />);
    const textContactButton = screen.getByRole(`button`, {
      name: /Contact Us/i,
    });
    expect(textContactButton).toBeInTheDocument();
  });
});
