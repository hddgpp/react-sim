Leo AI Chatbot - Intelligent Multilingual Assistant
A sophisticated, AI-powered chatbot built with React and Groq AI. Features multilingual conversations, context-aware responses, and a clean, modern interface.

https://img.shields.io/badge/React-18.x-blue https://img.shields.io/badge/AI-Multilingual-green https://img.shields.io/badge/Groq-API-orange https://img.shields.io/badge/License-MIT-green https://img.shields.io/badge/Status-Live-success

🚀 Live Demo
View Live Chatbot [Add your deployment link here]

✨ Features
🌍 Multilingual Support - Automatically detects and responds in user's language

🧠 Context-Aware Conversations - Maintains conversation memory across messages

⚡ Lightning Fast - Powered by Groq's high-speed inference engine

💬 Clean Interface - Modern, responsive chat design

🎯 Intelligent Responses - Helpful, friendly, and knowledgeable AI assistant

🔄 Real-time Interaction - Smooth messaging with loading states

📱 Mobile Responsive - Perfect experience on all devices

🛠️ Tech Stack
Frontend: React 18, CSS3, HTML5

AI Integration: Groq API (Llama 3.1-8b-instant)

Styling: Modern CSS with Flexbox

Icons: Custom PNG assets

Environment: Vite

🎯 AI Chatbot Capabilities
The core intelligence - a multilingual conversational AI that:

How It Works:
Send Message - User types any question in any language

AI Processing - Groq API processes with context awareness

Smart Response - Returns helpful answer in user's language

Continuous Conversation - Maintains context across messages

Technical Features:
Automatic Language Detection - Responds in user's input language

Conversation Memory - Remembers previous exchanges

Error Handling - Graceful fallbacks when API is unavailable

Real-time Updates - Immediate message display with loading states

📁 Project Structure
text
src/
├── components/
│   ├── Input-text/
│   │   ├── Input-text.jsx      # Message input with AI integration
│   │   └── Input-text.css      # Input styling
│   ├── ChatMessage/
│   │   ├── ChatMessage.jsx     # Chat history container
│   │   └── ChatMessage.css     # Scrollable chat area
│   └── Chat/
│       ├── Chat.jsx            # Individual message component
│       └── Chat.css            # Message bubble styling
├── services/
│   └── ai.js                   # AI integration service
├── App.jsx                     # Main application component
├── App.css                     # Global styling
└── main.jsx                    # Application entry point
🚀 Quick Start
Prerequisites
Node.js (v16 or higher)

npm or yarn

Groq API account

Installation
Clone the repository

bash
git clone https://github.com/hddgpp/react-sim.git
cd chatbot
Install dependencies

bash
npm install
Set up environment variables

bash
# Create .env.local
VITE_GROQ_API_KEY=your_groq_api_key_here
Run development server

bash
npm run dev
Open your browser

text
http://localhost:5173
🔧 AI Integration Details
Model: Llama-3.1-8b-instant via Groq API

Response Time: 1-2 seconds

Features: Multilingual support, conversation context, error recovery

Fallback: Smart error messages when AI is unavailable

💬 Usage Example
javascript
// The AI service handles everything automatically
const response = await getAIResponse("Hello, how are you?");
// Returns: "Hello! I'm doing great, thank you for asking. How can I help you today?"

// Multilingual example
const spanishResponse = await getAIResponse("¿Cómo estás?");
// Returns: "¡Hola! Estoy muy bien, gracias por preguntar. ¿En qué puedo ayudarte?"
🎨 Customization
Modify AI Personality
Edit the SYSTEM_PROMPT in src/services/ai.js:

javascript
const SYSTEM_PROMPT = `You are a helpful, friendly AI assistant...
// Customize your AI's personality and response style here
`;
Styling
All CSS files are modular and easy to customize:

App.css - Global layout and theming

Component-specific CSS files for precise control

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Developer
Mefouthi youssef
Front-end Developer & AI Enthusiast
GitHub: @hddgpp
Email: youssef.dev.ai@outlook.com

🙏 Acknowledgments
Groq API for lightning-fast AI inference

React Team for the amazing framework

Vite for excellent development experience

🌟 Project Journey
This chatbot demonstrates practical AI integration in modern web applications. From basic React components to sophisticated AI conversations, it showcases the power of combining cutting-edge AI with clean, user-friendly interfaces,
and its also my day 92 of learning.

⭐ Star this repo if you found the AI chatbot implementation useful!