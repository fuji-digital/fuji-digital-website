import renderer from "react-test-renderer";
import { MaintenancePage } from "./MaintenancePage";

jest.mock(`framer-motion`, () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    div: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  },
}));

describe("MaintenancePage", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<MaintenancePage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
