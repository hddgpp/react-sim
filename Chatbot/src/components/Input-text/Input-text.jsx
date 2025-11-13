import React from 'react'
import { getAIResponse } from '../../services/ai'
import './Input-text.css'

export default function InputText({ setSubmit, submit }) {
  const [inputText, setInputText] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  async function handleSendMessage() {
    if (inputText.trim() === '' || isLoading) return

    setIsLoading(true)

    const userInput = inputText
    const userMessageId = crypto.randomUUID()

    // Add user message immediately
    setSubmit(prev => [
      ...prev,
      {
        message: userInput,
        sender: 'user',
        id: userMessageId
      }
    ])

    setInputText('')

    try {
      // Pass full history to AI so it remembers
      const aiResponse = await getAIResponse(userInput, submit)

      setSubmit(prev => [
        ...prev,
        {
          message: aiResponse,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ])
    } catch (error) {
      setSubmit(prev => [
        ...prev,
        {
          message: "Sorry, I encountered an error. Please try again.",
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !isLoading) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className='container'>
      <input
        type='text'
        className='textInput'
        placeholder={isLoading ? "AI is thinking..." : "Ask anything"}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      <button 
        className='sendBtn' 
        onClick={handleSendMessage}
        disabled={isLoading || inputText.trim() === ''}
      >
        {isLoading ? '...' : 'Send'}
      </button>
    </div>
  )
}
