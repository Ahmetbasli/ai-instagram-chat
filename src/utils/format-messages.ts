import { modelName } from "../config/main";

export const formatMessages = (messages: Array<{ role: string; content: string }>): string => {
  let formattedMessage = `your task: continue chatting as ${modelName}.\n\n`;

  messages.forEach(({ role, content }) => {
    formattedMessage += `${role}: ${content}\n`;
  });

  formattedMessage += `${modelName}: `;

  return formattedMessage;
};
