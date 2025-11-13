import React from "react";
import InputText from "./components/Input-text/Input-text.jsx";
import ChatMessage from "./components/ChatMessage/ChatMessage.jsx";
import './App.css'

export default function App() {
  const [submit, setSubmit] = React.useState([])

  // Welcome message on first load
  React.useEffect(() => {
    if (submit.length === 0) {
      setSubmit([
        {
          message: "Hello! I'm Nova, your advanced AI assistant. I can communicate in multiple languages and help you with various tasks. How can I assist you today?",
          sender: 'robot',
          id: crypto.randomUUID(),
          timestamp: new Date().toISOString()
        }
      ])
    }
  }, []);

  return(
    <div className="generale">
      <div className="chat-header">
        <h2>Nova AI Assistant</h2>
        <div className="status">🟢 Online • Multilingual</div>
      </div>
      <ChatMessage submit={submit}/>
      <InputText setSubmit={setSubmit} submit={submit}/>
    </div>
  )
}