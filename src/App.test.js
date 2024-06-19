import renderer from "react-test-renderer";
import { App } from "./App";

jest.mock(`@uidotdev/usehooks`, () => ({
  useWindowSize: () => ({ width: 550 }),
}));

describe("App", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
