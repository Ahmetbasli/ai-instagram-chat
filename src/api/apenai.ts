import { modelName } from "../config/main";

export enum OpenAIModel {
  GPT_3_5_TURBO = "gpt-3.5-turbo",
  GPT_3_5_TURBO_16K = "gpt-3.5-turbo-16k",
  GPT_4 = "gpt-4",
  GPT_4_32K = "gpt-4-32k",
  GPT_4_TURBO_PREVIEW = "gpt-4-turbo-preview",
  GPT_4_VISION_PREVIEW = "gpt-4-vision-preview",
}

export const generateMessage = async (
  systemMessage: string,
  apiKey: string,
  prompt: string,
  openAIModel: OpenAIModel,
) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: openAIModel,
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
