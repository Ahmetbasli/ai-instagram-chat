import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { OpenAIModel } from "./api/apenai";

function App() {
  const [systemMessage, setSystemMessage] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [selectedModel, setSelectedModel] = useState<OpenAIModel>(OpenAIModel.GPT_3_5_TURBO);

  useEffect(() => {
    // Load saved values when the popup opens
    chrome.storage.sync.get(["systemMessage", "apiKey", "openAIModel"], (result) => {
      setSystemMessage(result.systemMessage || "");
      setApiKey(result.apiKey || "");
      setSelectedModel(result.openAIModel || OpenAIModel.GPT_3_5_TURBO);
    });
  }, []);

  const handleSystemMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.target.value;
    setSystemMessage(newMessage);
    chrome.storage.sync.set({ systemMessage: newMessage });
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newApiKey = e.target.value;
    setApiKey(newApiKey);
    chrome.storage.sync.set({ apiKey: newApiKey });
  };

  const handleModelChange = (value: OpenAIModel) => {
    setSelectedModel(value);
    chrome.storage.sync.set({ openAIModel: value });
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="system-message">System Message</Label>
          <Textarea
            id="system-message"
            placeholder="Enter system message here..."
            className="min-h-[100px]"
            value={systemMessage}
            onChange={handleSystemMessageChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="api-key">API Key</Label>
          <Input
            id="api-key"
            type="password"
            placeholder="Enter your API key"
            value={apiKey}
            onChange={handleApiKeyChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="openai-model">OpenAI Model</Label>
          <Select value={selectedModel} onValueChange={handleModelChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(OpenAIModel).map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
  );
}

export default App;
