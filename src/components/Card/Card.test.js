import renderer from "react-test-renderer";
import { Card } from "./Card";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("matches snapshot", () => {
    const child = <div>Hello</div>;
    const component = renderer.create(<Card children={child} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("renders children", () => {
    render(
      <Card>
        <p>Child to find</p>
      </Card>
    );
    const child = screen.getByText("Child to find");
    expect(child).toBeInTheDocument();
  });
});
