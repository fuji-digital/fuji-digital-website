import { Modal } from "./Modal";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Modal", () => {
  it("closes menu when clicking backdrop", () => {
    const mockedHandleCrossClick = jest.fn();
    render(<Modal handleCrossClick={mockedHandleCrossClick} />);

    const closeModalButton = screen.getByTestId(`cross-button`);

    fireEvent.click(closeModalButton);

    expect(mockedHandleCrossClick).toHaveBeenCalled();

    const modalBackdrop = screen.getByTestId(`close-backdrop`);

    fireEvent.click(modalBackdrop);

    expect(mockedHandleCrossClick).toHaveBeenCalled();
  });

  it("renders children", () => {
    render(
      <Modal>
        <p>Child to find</p>
      </Modal>
    );
    const child = screen.getByText("Child to find");
    expect(child).toBeInTheDocument();
  });
});
