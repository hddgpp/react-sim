const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const SYSTEM_PROMPT = `You are an advanced AI assistant with capabilities similar to state-of-the-art language models.
Your name is Nova.

CORE CAPABILITIES:
- Detect and respond in the same language as the user
- Maintain conversation context and memory
- Provide detailed, helpful, and accurate responses
- Be conversational yet professional
- Admit when you don't know something
- Think step-by-step for complex problems

RESPONSE GUIDELINES:
- Match the user's language automatically
- Be engaging and natural in conversation
- Provide comprehensive but concise answers
- Use appropriate formatting for different content types
- Maintain personality while being helpful

If the user switches languages, seamlessly switch with them.`;

export async function getAIResponse(userMessage, conversationHistory = []) {
  if (!GROQ_API_KEY || GROQ_API_KEY === 'your_actual_groq_api_key_here') {
    return "🔑 API configuration needed. Please check your environment variables.";
  }

  try {
    // Build conversation context
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...conversationHistory.slice(-6), // Keep last 3 exchanges for context
      { role: "user", content: userMessage }
    ];

    console.log("Sending to AI:", { userMessage, historyLength: conversationHistory.length });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45000); // Increased timeout

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-70b-versatile", // More powerful model
        messages: messages,
        max_tokens: 2048, // Longer responses
        temperature: 0.8, // More creative
        top_p: 0.9,
        frequency_penalty: 0.1,
        presence_penalty: 0.1,
        stream: false
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.choices?.[0]?.message?.content) {
      throw new Error("Invalid response format");
    }
    
    return data.choices[0].message.content;
    
  } catch (err) {
    console.error("AI Error:", err);
    
    if (err.name === 'AbortError') {
      return "⏰ I'm thinking deeply about your question. Please try again with a more specific query!";
    }
    
    // Multilingual fallback responses
    const fallbackResponses = [
      "I apologize, but I'm experiencing technical difficulties. Please try again in a moment.",
      "Disculpe, estoy teniendo problemas técnicos. Por favor, inténtelo de nuevo.",
      "Désolé, je rencontre des difficultés techniques. Veuillez réessayer.",
      "抱歉，我遇到了技术问题。请稍后再试。",
      "माफ़ कीजिए, मुझे तकनीकी समस्याएँ आ रही हैं। कृपया कुछ देर बाद पुन: प्रयास करें。"
    ];
    
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }
}

// Language detection helper (simple version)
export function detectLanguage(text) {
  const patterns = {
    spanish: /[áéíóúñ¿¡]/gi,
    french: /[àâçéèêëîïôûùüÿœæ]/gi,
    german: /[äöüß]/gi,
    russian: /[а-яё]/gi,
    arabic: /[؀-ۿ]/gi,
    chinese: /[\u4e00-\u9fff]/gi,
    japanese: /[\u3040-\u309f\u30a0-\u30ff]/gi,
    korean: /[\uac00-\ud7af\u1100-\u11ff]/gi
  };

  for (const [lang, pattern] of Object.entries(patterns)) {
    if (pattern.test(text)) return lang;
  }
  return 'english'; // default
}