import { render, screen, fireEvent } from "@testing-library/react";
import { MobileHeader } from "./MobileHeader";

describe("MobileHeader", () => {
  it("on click menu is open", () => {
    render(<MobileHeader />);

    const menuButton = screen.getByTestId(`menu-button`);

    fireEvent.click(menuButton);

    const menu = screen.getByTestId(`menu`);

    expect(menu).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(menu).not.toBeInTheDocument();
  });

  it("closes menu when clicking backdrop", () => {
    render(<MobileHeader />);

    const menuButton = screen.getByTestId(`menu-button`);

    fireEvent.click(menuButton);

    const menu = screen.getByTestId(`menu`);

    const menuBackdrop = screen.getByTestId(`menu-backdrop`);

    expect(menuBackdrop).toBeInTheDocument();

    fireEvent.click(menuBackdrop);

    expect(menu).not.toBeInTheDocument();

    expect(menuBackdrop).not.toBeInTheDocument();
  });

  it("when clicking anchor tag menu closes", () => {
    render(<MobileHeader />);

    const menuButton = screen.getByTestId(`menu-button`);

    fireEvent.click(menuButton);

    const menu = screen.getByTestId(`menu`);

    const whatWeDo = screen.getByRole("link", { name: "What we do" });

    fireEvent.click(whatWeDo);

    expect(menu).not.toBeInTheDocument();

    fireEvent.click(menuButton);

    const whoAreWe = screen.getByRole("link", { name: "Who are we" });

    fireEvent.click(whoAreWe);

    expect(menu).not.toBeInTheDocument();
  });
});
