import renderer from "react-test-renderer";
import { ContactButton } from "./ContactButton";

describe("ContactButton", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<ContactButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
