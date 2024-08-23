import { useState, useEffect } from "react";
import { OpenAIModel } from "../api/apenai";

export const useStorage = () => {
  const [systemMessage, setSystemMessage] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [openAIModel, setOpenAIModel] = useState<OpenAIModel>(OpenAIModel.GPT_3_5_TURBO);

  useEffect(() => {
    chrome.storage.sync.get(["systemMessage", "apiKey", "openAIModel"], (result) => {
      setSystemMessage(result.systemMessage || "");
      setApiKey(result.apiKey || "");
      setOpenAIModel(result.openAIModel || OpenAIModel.GPT_3_5_TURBO);
    });

    const handleStorageChange = (changes: { [key: string]: chrome.storage.StorageChange }, areaName: string) => {
      if (areaName === "sync") {
        if (changes.systemMessage) setSystemMessage(changes.systemMessage.newValue);
        if (changes.apiKey) setApiKey(changes.apiKey.newValue);
        if (changes.openAIModel) setOpenAIModel(changes.openAIModel.newValue);
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);

    return () => {
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

  return { systemMessage, apiKey, openAIModel };
};
