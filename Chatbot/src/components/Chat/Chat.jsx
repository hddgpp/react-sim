import React from 'react'
import './Chat.css'

const userIcon = '../../../public/user.png'
const robotIcon = '../../../public/robot.png'

export default function Chat({sender, message}) {

    return(
            <div className={sender === 'user' ? 'user-container' : 'robot-container'}>
                {sender === 'robot' && <img src={robotIcon} width={50} alt="" />}
                {message}
                {sender === 'user' && <img src={userIcon} width={50} alt="" />}
            </div>
    )
}