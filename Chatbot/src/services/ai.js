const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const SYSTEM_PROMPT = `You are a helpful, friendly, and knowledgeable AI assistant. 
Provide clear, concise, and helpful responses to the user's questions.
Be engaging and conversational in your tone.
If you don't know something, be honest about it and suggest where they might find the information.`;

export async function getAIResponse(userMessage) {
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

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Groq API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Groq Response:", data);
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid response format from Groq API");
    }
    
    return data.choices[0].message.content;
    
  } catch (err) {
    console.error("AI Error:", err);
    
    if (err.name === 'AbortError') {
      return "⏰ I'm taking a bit longer than usual to respond. Please try again!";
    }
    
    // Friendly fallback responses
    const fallbackResponses = [
      "I apologize, but I'm having trouble connecting right now. Could you try asking again in a moment?",
      "It seems I'm having some technical difficulties. Please try your question again!",
      "I'm currently experiencing some connection issues. Your message is important - please try again shortly!"
    ];
    
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }
}