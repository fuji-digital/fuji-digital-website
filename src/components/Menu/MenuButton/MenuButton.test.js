import renderer from "react-test-renderer";
import { render, screen, fireEvent, rerender } from "@testing-library/react";
import { MenuButton } from "./MenuButton";
import closeMenu from "../../../images/icons/cross-icon.svg";
import openMenu from "../../../images/icons/burger-menu.svg";

describe("MenuButton", () => {
  it("on click menu is open", () => {
    let isMenuOpen = false;

    const handleMenuClick = () => {
      isMenuOpen = !isMenuOpen;
    };

    const { rerender } = render(
      <MenuButton isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
    );
    const menuButton = screen.getByRole(`button`);
    fireEvent.click(menuButton);
    rerender(
      <MenuButton isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
    );
    const menuImage = screen.getByRole(`img`);

    expect(menuImage).toHaveAttribute("src", closeMenu);

    fireEvent.click(menuButton);
    rerender(
      <MenuButton isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
    );
    expect(menuImage).toHaveAttribute("src", openMenu);
  });
});
