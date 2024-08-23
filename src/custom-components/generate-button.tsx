import { useState } from "react";
import { Button } from "../components/ui/button";
import { useStorage } from "../hooks/use-storage";
import { generateMessage } from "../api/apenai";
import { useInstagramMessages } from "../hooks/use-instagram-messages";
import { formatMessages } from "../utils/format-messages";
import { updateAssociatedInput } from "../utils/update-associated-input";

export const GenerateButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { systemMessage, apiKey, openAIModel } = useStorage();

  const messages = useInstagramMessages();
  const formatedMessages = formatMessages(messages);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const generatedMessage = await generateMessage(systemMessage, apiKey, formatedMessages, openAIModel);
      const updated = updateAssociatedInput(generatedMessage);
      if (!updated) {
        console.error("Failed to update input with generated message");
      }
    } catch (error) {
      console.error("Error generating message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button disabled={isLoading} className="cursor-pointer" variant="outline" onClick={handleClick}>
      {isLoading ? "Generating..." : "Generate message"}
    </Button>
  );
};
