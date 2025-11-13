import React from 'react'
import { getAIResponse } from '../../services/ai'
import './Input-text.css'

export default function InputText({ setSubmit }) {
  const [inputText, setInputText] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  async function handleSendMessage() {
    if (inputText.trim() === '' || isLoading) return

    setIsLoading(true)
    
    // Add user message immediately
    const userMessageId = crypto.randomUUID()
    setSubmit(prev => [
      ...prev,
      {
        message: inputText,
        sender: 'user',
        id: userMessageId
      }
    ])

    const userInput = inputText
    setInputText('')

    try {
      // Get AI response
      const aiResponse = await getAIResponse(userInput)
      
      // Add AI response
      setSubmit(prev => [
        ...prev,
        {
          message: aiResponse,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ])
    } catch (error) {
      // Add error message
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