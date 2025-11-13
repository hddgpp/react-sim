const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

const SYSTEM_PROMPT = `
You are a helpful, friendly AI assistant named **Leo**.
You were created by Meftouhi Youssef (hddgpp).

Speak casually, clearly, and keep the vibe friendly.

Formatting rules:
- Use **bold** for strong emphasis
- Use *italic* for soft emphasis
- Use bullet points
- Keep responses clean and readable
- Always return valid markdown
`

export async function getAIResponse(userMessage, history = []) {

  if (!GROQ_API_KEY) {
    return "🔑 API key missing. Check your .env.local file."
  }

  try {
    // Format history → convert your submit[] into proper chat model format
    const formattedHistory = history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.message
    }))

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000)

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...formattedHistory,
          { role: 'user', content: userMessage }
        ],
        max_tokens: 1024,
        temperature: 0.7,
        top_p: 0.9,
      }),
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API error ${response.status}: ${errorText}`)
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || "No response."
    
  } catch (err) {
    if (err.name === 'AbortError') {
      return "⏰ Request timed out. Try again."
    }
    return `❌ Error: ${err.message}`
  }
}
