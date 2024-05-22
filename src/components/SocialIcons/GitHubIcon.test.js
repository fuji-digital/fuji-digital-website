import renderer from "react-test-renderer";
import GitHubIcon from "./GitHubIcon";

describe("github icon", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<GitHubIcon />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
