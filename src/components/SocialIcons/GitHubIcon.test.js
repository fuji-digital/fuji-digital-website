import renderer from "react-test-renderer";
import GitHubIcon from "./GitHubIcon";

describe("github icon", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<GitHubIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
