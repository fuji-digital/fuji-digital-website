import renderer from "react-test-renderer";
import { LivePage } from "./LivePage";

describe("LivePage", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<LivePage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
