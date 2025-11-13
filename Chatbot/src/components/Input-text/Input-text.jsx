import React from 'react'
import './Input-text.css'

export default function InputText({ setSubmit }) {
  const [inputText, setInputText] = React.useState('')

  function handleChange(event) {
    setInputText(event.target.value)
  }

  function sendMessage() {
    if (inputText.trim() === '') return

    const response = window.Chatbot.getResponse(inputText)

    setSubmit(prev => [
      ...prev,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      },
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])

    setInputText('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className='container'>
      <input
        type='text'
        className='textInput'
        placeholder='Ask anything'
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className='sendBtn' onClick={sendMessage}>
        Send
      </button>
    </div>
  )
}
