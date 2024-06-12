import renderer from "react-test-renderer";
import { LivePage } from "./LivePage";

jest.mock(`@uidotdev/usehooks`, () => ({
  useWindowSize: () => ({ width: 550 }),
}));

describe("LivePage", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<LivePage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
