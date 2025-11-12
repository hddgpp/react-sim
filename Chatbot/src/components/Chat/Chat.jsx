import React from 'react'
import './Chat.css'

const userIcon = '../../../public/user.png'
const robotIcon = '../../../public/robot.png'

export default function Chat({sender, message}) {

    return(
            <div className={sender === 'user' ? 'user-container' : 'robot-container'}>
                {sender === 'robot' && <img src={robotIcon} className='pic'  alt="" />}
                <div className='chat-message'>
                    {message}
                </div>
                {sender === 'user' && <img src={userIcon} className='pic' alt="" />}
            </div>
    )
}