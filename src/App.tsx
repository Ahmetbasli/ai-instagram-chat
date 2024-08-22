import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function App() {
  const [systemMessage, setSystemMessage] = useState("");
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    // Load saved values when the popup opens
    chrome.storage.sync.get(["systemMessage", "apiKey"], (result) => {
      setSystemMessage(result.systemMessage || "");
      setApiKey(result.apiKey || "");
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
      </div>
    </main>
  );
}

export default App;
