import { modelName } from "../config/main";

export const generateMessage = async (systemMessage: string, apiKey: string, prompt: string) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  const generatedMessage = data.choices[0].message.content as string;

  return generatedMessage.replace(`${modelName}:`, "");
};
