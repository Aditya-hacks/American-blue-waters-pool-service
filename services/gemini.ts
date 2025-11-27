import { GoogleGenAI } from "@google/genai";

// Ideally, this key comes from process.env.API_KEY as per instructions.
// The user of the code must ensure this environment variable is set.
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generatePoolTip = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return "Please configure your API Key to receive AI-powered pool tips.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Provide a helpful, concise (under 50 words) tip for a pool owner regarding: ${topic}. Tone: Professional, friendly, and trustworthy.`,
    });
    
    return response.text || "Keep your pool chemicals balanced for a sparkling swim!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Regular maintenance is the key to a healthy pool. Contact us for a checkup!";
  }
};
