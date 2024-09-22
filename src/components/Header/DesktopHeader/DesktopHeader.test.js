import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import { DesktopHeader } from "./DesktopHeader";

jest.mock(`framer-motion`, () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    div: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  },
}));

describe("Desktop Header", () => {
  it("matches snapshot", () => {
    const component = renderer
      .create(<DesktopHeader handleModalClick={() => {}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it("click on say hello button handle modal click function is called", () => {
    const mockedHandleModalClick = jest.fn();
    render(<DesktopHeader handleModalClick={mockedHandleModalClick} />);

    const contactButton = screen.getByTestId(`contact-button`);

    fireEvent.click(contactButton);

    expect(mockedHandleModalClick).toHaveBeenCalled();
  });
});
