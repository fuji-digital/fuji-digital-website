import renderer from "react-test-renderer";
import { MaintenancePage } from "./MaintenancePage";

describe("MaintenancePage", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<MaintenancePage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
