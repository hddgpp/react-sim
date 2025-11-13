import React from 'react'
import Chat from '../Chat/Chat.jsx'
import './ChatMessage.css'

export default function ChatMessage({submit}) {

    const chatRef = React.useRef(null);

    React.useEffect(() => {
        const containerElem = chatRef.current
        if(containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight
        }
    }, [submit]);

    return(
        <div className='ChatMessage-container' ref={chatRef}>
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