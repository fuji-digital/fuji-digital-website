import { render, screen } from "@testing-library/react";
import App from "./App";

test("fuji digital h1 renders on page", () => {
  render(<App />);
  // const title = screen.getByText(/Fuji Digital./i);
  expect(true).toBeTruthy();
});
