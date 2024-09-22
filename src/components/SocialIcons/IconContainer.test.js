import renderer from "react-test-renderer";
import { IconContainer } from "./IconContainer";

jest.mock(`framer-motion`, () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    div: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  },
}));

describe("IconContainer", () => {
  it("matches snapshot", () => {
    const component = renderer
      .create(<IconContainer className={{}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
