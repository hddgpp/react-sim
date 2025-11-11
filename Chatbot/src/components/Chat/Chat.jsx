import React from 'react'

export default function Chat(props) {

    const {sender, message} = props
    
    let icon = '../../../public/user.png'

    if(sender === 'robot') {
        icon = '../../../public/robot.png'
        return (
            <div>
                <img src={icon} width={50} alt="" />
                {message}
            </div>
        )
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