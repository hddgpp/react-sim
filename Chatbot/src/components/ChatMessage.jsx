import React from 'react'
import Chat from './Chat/Chat.jsx'

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