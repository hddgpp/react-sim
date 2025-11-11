import React from 'react'
import Chat from './Chat/Chat.jsx'

export default function chatMessage() {

    const chat = [{
        message: 'hello there',
        sender: 'user',
        id: 1
    },{
        message: 'hi how can i help you?',
        sender: 'robot',
        id: 2
    }
    ]

    return(
        <>
            { chat.map((chatMessages) => {
                return(
                  <Chat 
                    message={chatMessages.message}
                    sender={chatMessages.sender}
                    key = {chatMessages.id}
                    />
                )
              })}
        </>
    )
}