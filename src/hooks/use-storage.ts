import { useState, useEffect } from "react";

export const useStorage = () => {
  const [systemMessage, setSystemMessage] = useState("");
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    chrome.storage.sync.get(["systemMessage", "apiKey"], (result) => {
      setSystemMessage(result.systemMessage || "");
      setApiKey(result.apiKey || "");
    });

    const handleStorageChange = (changes: { [key: string]: chrome.storage.StorageChange }, areaName: string) => {
      if (areaName === "sync") {
        if (changes.systemMessage) setSystemMessage(changes.systemMessage.newValue);
        if (changes.apiKey) setApiKey(changes.apiKey.newValue);
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);

    return () => {
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

  return { systemMessage, apiKey };
};
