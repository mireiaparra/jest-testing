import { act, render } from "@testing-library/react";
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";
import React from "react";

describe("ConfirmationDialogComponent", () => {
  it("should render as expected passing required properties", () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: "Test Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
      children: <div>Test Content</div>,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.labels.closeButton)).toBeInTheDocument();
    expect(getByText(props.labels.acceptButton)).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: "Test Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
      children: <div>Test Content</div>,
    };

    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Act
    act(() => {
      getByText(props.labels.closeButton).click();
    });

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });

  it("should call onAccept when accept button is clicked", () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: "Test Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
      children: <div>Test Content</div>,
    };

    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Act
    act(() => {
      getByText(props.labels.acceptButton).click();
    });

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
  });

  it("should render the title as a React node", () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: <h1>Test Title</h1>,
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
      children: <div>Test Content</div>,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText("Test Title")).toBeInTheDocument();
  });
  it("should render the title as a string", () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: "Test Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
      children: <div>Test Content</div>,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText("Test Title")).toBeInTheDocument();
  });
  it("should render the children", () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: "Test Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
      children: <div>Test Content</div>,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText("Test Content")).toBeInTheDocument();
  });
  it("should render the close button with the correct label", () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: "Test Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
      children: <div>Test Content</div>,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText(props.labels.closeButton)).toBeInTheDocument();
  });
  it("should render the accept button with the correct label", () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: "Test Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
      children: <div>Test Content</div>,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText(props.labels.acceptButton)).toBeInTheDocument();
  });
});
