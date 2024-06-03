import renderer from "react-test-renderer";
import { WhatWeDo } from "./WhatWeDo";

describe("WhatWeDo", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<WhatWeDo />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
