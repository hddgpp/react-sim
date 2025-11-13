import React from 'react'
import { getAIResponse } from '../../services/ai'
import './Input-text.css'

export default function InputText({ setSubmit, submit }) {
  const [inputText, setInputText] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  // Build conversation history for context
  const buildConversationHistory = () => {
    return submit.map(chat => ({
      role: chat.sender === 'user' ? 'user' : 'assistant',
      content: chat.message
    }));
  };

  async function handleSendMessage() {
    if (inputText.trim() === '' || isLoading) return

    setIsLoading(true)
    
    const userMessageId = crypto.randomUUID()
    const userInput = inputText

    // Add user message immediately
    setSubmit(prev => [
      ...prev,
      {
        message: userInput,
        sender: 'user',
        id: userMessageId,
        timestamp: new Date().toISOString()
      }
    ])

    setInputText('')

    try {
      const conversationHistory = buildConversationHistory();
      const aiResponse = await getAIResponse(userInput, conversationHistory)
      
      setSubmit(prev => [
        ...prev,
        {
          message: aiResponse,
          sender: 'robot',
          id: crypto.randomUUID(),
          timestamp: new Date().toISOString()
        }
      ])
    } catch (error) {
      setSubmit(prev => [
        ...prev,
        {
          message: "I encountered an error processing your request. Please try again.",
          sender: 'robot',
          id: crypto.randomUUID(),
          timestamp: new Date().toISOString()
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className='container'>
      <div className='input-wrapper'>
        <input
          type='text'
          className='textInput'
          placeholder={isLoading ? "Nova is thinking..." : "Ask me anything in any language..."}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button 
          className={`sendBtn ${isLoading ? 'loading' : ''}`}
          onClick={handleSendMessage}
          disabled={isLoading || inputText.trim() === ''}
        >
          {isLoading ? '⟳' : '↑'}
        </button>
      </div>
      <div className='input-hint'>
        💬 Supports multiple languages • ✨ Advanced AI • 🔄 Context-aware
      </div>
    </div>
  )
}