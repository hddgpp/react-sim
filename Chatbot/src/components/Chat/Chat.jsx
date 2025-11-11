import React from 'react'

const userIcon = '../../../public/user.png'
const robotIcon = '../../../public/robot.png'

export default function Chat({sender, message}) {

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