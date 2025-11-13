const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const SYSTEM_PROMPT = `You are a helpful, friendly, and knowledgeable AI assistant. 
Provide clear, concise, and helpful responses to the user's questions.
Be engaging and conversational in your tone.

FORMATTING GUIDELINES:
- Use **bold** for emphasis and headings
- Use *italic* for subtle emphasis
- Use bullet points • for lists
- Use numbered lists for steps
- Keep paragraphs short and readable
- Use line breaks between sections
- Structure complex information clearly

Make your responses well-organized and easy to read.`;

export async function getAIResponse(userMessage) {
  // Debug: Check if API key is loaded
  console.log("API Key exists:", !!GROQ_API_KEY);
  console.log("API Key length:", GROQ_API_KEY ? GROQ_API_KEY.length : 0);
  
  if (!GROQ_API_KEY || GROQ_API_KEY === 'your_actual_groq_api_key_here') {
    return "🔑 API key not configured. Please check your .env.local file.";
  }

  try {
    console.log("Sending to Groq AI:", userMessage);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { 
            role: "system", 
            content: SYSTEM_PROMPT 
          },
          { 
            role: "user", 
            content: userMessage
          }
        ],
        max_tokens: 1024,
        temperature: 0.7,
        top_p: 0.9,
        stream: false
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    console.log("Response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error details:", errorText);
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Groq Response received:", data);
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid response format from API");
    }
    
    return data.choices[0].message.content;
    
  } catch (err) {
    console.error("AI Error details:", err);
    
    if (err.name === 'AbortError') {
      return "⏰ Request timeout. Please try again!";
    }
    
    return `Error: ${err.message}. Please check the console for details.`;
  }
}