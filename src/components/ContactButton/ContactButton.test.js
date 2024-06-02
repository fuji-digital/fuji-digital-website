import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { ContactButton } from "./ContactButton";

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
