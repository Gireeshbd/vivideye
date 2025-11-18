import { GoogleGenAI, Type } from "@google/genai";
import { AiConceptRequest, AiConceptResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateEventConcept = async (request: AiConceptRequest): Promise<AiConceptResponse> => {
  const prompt = `
    Act as a world-class Creative Director for Vivideye, a luxury event management company in Bangalore.
    Create a brief, high-impact event concept proposal.
    
    Event Details:
    - Type: ${request.eventType}
    - Theme/Vibe: ${request.theme}
    - Guest Count: ${request.guestCount}
    
    Return the response in JSON format with the following schema:
    - title: A creative, catchy name for the event.
    - concept: A 2-3 sentence immersive description of the atmosphere and decor.
    - highlights: An array of 3 specific key features or entertainment acts for this event.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            concept: { type: Type.STRING },
            highlights: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "concept", "highlights"]
        }
      }
    });

    if (!response.text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(response.text) as AiConceptResponse;
  } catch (error) {
    console.error("Error generating concept:", error);
    throw error;
  }
};