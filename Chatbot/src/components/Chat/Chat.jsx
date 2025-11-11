import React from 'react'

export default function Chat(props) {

    const message = props.message
    const sender = props.sender
    let icon

    if(sender === 'user') {
        icon = '../../../public/user.png'
    } else if(sender === 'robot') {
        icon = '../../../public/robot.png'
    }

    return(
        <main>
            <div>
                {message}
               <img src={icon} width={50} alt="" />
            </div>
        </main>
    )
}