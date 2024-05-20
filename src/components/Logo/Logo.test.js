import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Logo from "./Logo";
import textLogoWhite from "../../images/logo/fuji-digital-text-logo-white.svg";
import textLogoPurple from "../../images/logo/fuji-digital-text-logo-purple.svg";

test("renders default white version of logo", () => {
  render(<Logo />);
  const textLogo = screen.getByTestId("textLogo");
  expect(textLogo).toHaveAttribute("src", textLogoWhite);
});

test("renders purple text logo when version is purple", () => {
  render(<Logo version="purple" />);
  const textLogo = screen.getByTestId("textLogo");
  expect(textLogo).toHaveAttribute("src", textLogoPurple);
});
