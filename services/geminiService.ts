import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize client only if API key exists to prevent errors during import if missing
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const generateWatercolorImage = async (prompt: string): Promise<string | null> => {
  if (!ai) {
    console.warn("Gemini API Key is missing. Returning null to trigger fallback.");
    return null;
  }

  try {
    // Using gemini-2.5-flash-image for standard image generation as per guidelines
    // or gemini-3-pro-image-preview for high quality if needed. 
    // The guidelines suggest gemini-2.5-flash-image for general use.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
            aspectRatio: "4:3", 
        }
      }
    });

    // Iterate through parts to find the image
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          const base64EncodeString = part.inlineData.data;
          // Determine mime type, default to png if not specified, though usually it is 'image/png' or 'image/jpeg'
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64EncodeString}`;
        }
      }
    }
    
    return null;

  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    return null;
  }
};