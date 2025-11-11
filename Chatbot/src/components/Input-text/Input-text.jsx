import React from 'react'

export default function InputText() {
    return (
        <main>
            <div>
                <label>
                    <input type="text"
                           className='textInput'
                           placeholder='Ask anything' />
                </label> 
                <button className='submitBtn'>Send</button>
            </div>
        </main>
    )
}