import React from 'react'
import Chat from '../Chat/Chat.jsx'
import ReactMarkdown from 'react-markdown'
import './ChatMessage.css'

export default function ChatMessage({ submit }) {

  const chatRef = React.useRef(null)

  React.useEffect(() => {
    const container = chatRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [submit])

  return (
    <div className='ChatMessage-container' ref={chatRef}>
      {submit.map((msg) => {
        return (
          <Chat
            key={msg.id}
            sender={msg.sender}
            message={<ReactMarkdown>{msg.message}</ReactMarkdown>}
          />
        )
      })}
    </div>
  )
}
