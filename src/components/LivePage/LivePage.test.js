import renderer from "react-test-renderer";
import { LivePage } from "./LivePage";

jest.mock(`framer-motion`, () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    div: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  },
}));

jest.mock(`@uidotdev/usehooks`, () => ({
  useWindowSize: () => ({ width: 550 }),
}));

describe("LivePage", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<LivePage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
