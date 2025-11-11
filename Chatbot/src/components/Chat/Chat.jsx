import React from 'react'

export default function Chat(props) {

    const message = props.message
    const sender = props.sender
    let photo

    if(sender === 'user') {
        photo = '../../../public/user.png'
    } else if(sender === 'robot') {
        photo = '../../../public/robot.png'
    }

    return(
        <main>
            <div>
                {message}
               <img src={photo} width={50} alt="" />
            </div>
        </main>
    )
}