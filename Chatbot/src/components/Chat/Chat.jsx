import React from 'react'

export default function Chat({sender, message}) {

    const userIcon = '../../../public/user.png'
    const robotIcon = '../../../public/robot.png'

    return(
        <main>
            <div>
                {sender === 'robot' && <img src={robotIcon} width={50} alt="" />}
                {message}
               <img src={userIcon} width={50} alt="" />
            </div>
        </main>
    )
}