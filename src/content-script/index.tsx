import { createRoot } from "react-dom/client";
import { GenerateButton } from "../custom-components/generate-button";
import { idOfGenerateMessageButtonContainer } from "../config/main";

const CHECK_PAGE_EVERY = 5000; // 5 seconds

function injectButtonsToInputs() {
  const input = document.querySelector("input");

  if (!input?.parentNode) {
    return;
  }

  const buttonContainerId = idOfGenerateMessageButtonContainer;

  const existingContainer = document.getElementById(buttonContainerId);
  if (existingContainer) {
    return;
  }

  const buttonContainer = document.createElement("span");
  buttonContainer.id = buttonContainerId;
  input.parentNode.insertBefore(buttonContainer, input.nextSibling);

  const root = createRoot(buttonContainer);
  root.render(<GenerateButton />);
}

function checkAndInjectButton() {
  injectButtonsToInputs();

  setTimeout(checkAndInjectButton, CHECK_PAGE_EVERY);
}

checkAndInjectButton();
