import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export const requestToGroqAI = async (content) => {
  const reply = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content,
      },
    ],
    model: "llama3-8b-8192",
  });
  return reply.choices[0].message.content;
};