import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { StandardLogo } from "./StandardLogo";
import textLogoWhite from "../../../images/logo/fuji-digital-text-logo-white.svg";
import textLogoPurple from "../../../images/logo/fuji-digital-text-logo-purple.svg";

test("renders default white version of logo", () => {
  render(<StandardLogo />);
  const textLogo = screen.getByTestId("textLogo");
  expect(textLogo).toHaveAttribute("src", textLogoWhite);
});

test("renders purple text logo when version is purple", () => {
  render(<StandardLogo version="purple" />);
  const textLogo = screen.getByTestId("textLogo");
  expect(textLogo).toHaveAttribute("src", textLogoPurple);
});
