import renderer from "react-test-renderer";
import { Footer } from "././Footer";

describe("Footer", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<Footer />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
