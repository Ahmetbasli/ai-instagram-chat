export const updateAssociatedInput = (newValue: string): boolean => {
  const messageBox = document.querySelector('div[contenteditable="true"][aria-label="Message"]') as HTMLElement | null;

  // Handle the case where the messageBox is null
  if (!messageBox) {
    console.error("Could not find the associated input element");
    return false;
  }

  // Simulate a click on the message box
  messageBox.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
  messageBox.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true }));
  messageBox.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));

  // Simulate focusing the message box
  messageBox.focus();
  messageBox.dispatchEvent(new FocusEvent("focus", { bubbles: true, cancelable: true }));

  // Simulate pasting the newValue into the message box
  const pasteEvent = new InputEvent("input", {
    bubbles: true,
    cancelable: true,
    inputType: "insertFromPaste",
    data: newValue,
  });

  messageBox.innerText += newValue; // Update the contenteditable div's content
  messageBox.dispatchEvent(pasteEvent);

  // Optionally, trigger a change event if needed
  messageBox.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));

  return true;
};
