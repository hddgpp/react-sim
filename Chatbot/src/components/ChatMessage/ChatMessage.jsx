import React from 'react'
import Chat from '../Chat/Chat.jsx'
import './ChatMessage.css'

export default function ChatMessage({submit}) {

    return(
        <div className='ChatMessage-container'>
            {submit.map((chatMessage) => {
                return(
                    <Chat 
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                )
            })}
        </div>
    )
}