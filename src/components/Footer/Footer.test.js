import renderer from "react-test-renderer";
import { Footer } from "./Footer";

jest.mock(`framer-motion`, () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    div: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  },
}));

describe("Footer", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<Footer />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
