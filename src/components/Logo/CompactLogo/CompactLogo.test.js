import renderer from "react-test-renderer";
import { CompactLogo } from "./CompactLogo";

describe("CompactLogo icon", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<CompactLogo />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
