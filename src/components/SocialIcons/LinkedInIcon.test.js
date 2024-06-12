import renderer from "react-test-renderer";
import LinkedInIcon from "./LinkedInIcon";

describe("LinkedIn icon", () => {
  it("matches snapshot", () => {
    const component = renderer
      .create(<LinkedInIcon url="" color="" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
