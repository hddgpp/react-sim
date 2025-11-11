import React from 'react'
import user from '../../../public/user.png'

export default function Chat(props) {

    const message = props.message

    return(
        <main>
            <div>
                {message}
               <img src={user} width={50} alt="" />
            </div>
        </main>
    )
}