import React from 'react'

export default function InputText() {
    return (
        <main>
            <div>
                <label>
                    <input type="text" className='textInput' />
                </label> 
                <button className='submitBtn'>Submit</button>
            </div>
        </main>
    )
}