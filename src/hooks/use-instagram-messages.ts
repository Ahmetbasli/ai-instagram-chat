// hooks/useInstagramMessages.ts
import { useState, useEffect } from "react";
import { modelName } from "../config/main";

interface Message {
  role: string;
  content: string;
}

export const useInstagramMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const extractMessages = () => {
      const messageElements = document.querySelectorAll('[role="gridcell"]');
      const extractedMessages: Message[] = [];

      messageElements.forEach((element) => {
        const senderElement = element.querySelector("h5 span");
        const contentElement = element.querySelector('[dir="auto"] .html-div');

        if (senderElement && contentElement) {
          const senderText = senderElement.textContent || "";
          const content = contentElement.textContent || "";

          if (content) {
            let role: string;
            if (senderText === "You sent") {
              role = modelName;
            } else {
              // Extract the actual name from the sender text
              role = senderText.trim();
            }

            extractedMessages.push({ role, content });
          }
        }
      });

      setMessages(extractedMessages);
    };

    // Extract messages when the hook is first used
    extractMessages();

    // Set up a MutationObserver to watch for changes in the chat
    const observer = new MutationObserver(extractMessages);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return messages;
};
