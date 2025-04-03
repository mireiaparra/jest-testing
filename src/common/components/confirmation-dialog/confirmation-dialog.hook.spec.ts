import { act, renderHook } from "@testing-library/react";
import { createEmptyLookup, Lookup } from "#common/models";
import { useConfirmationDialog } from "./confirmation-dialog.hook";

describe("useConfirmationDialog", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it("should accept the deletion and reset the item to delete", () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const mockItem: Lookup = { id: "1", name: "Test Item" };

    act(() => {
      result.current.onOpenDialog(mockItem);
      result.current.onAccept();
    });
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it("should close the dialog", () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it("should open the dialog and set the item to delete", () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const mockItem: Lookup = { id: "1", name: "Test Item" };

    act(() => {
      result.current.onOpenDialog(mockItem);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(mockItem);
  });
});
