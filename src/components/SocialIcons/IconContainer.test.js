import renderer from "react-test-renderer";
import { IconContainer } from "./IconContainer";

describe("IconContainer", () => {
  it("matches snapshot", () => {
    const component = renderer
      .create(<IconContainer className={{}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
