import React from 'react'
import './Input-text.css'

export default function InputText({setSubmit}) {

    const [inputText, setInputText] = React.useState('')

    function handleChange(event) {
        setInputText((event.target.value))
    }

    function sendMessage() {

        if (inputText.trim() === "") return; 

        const response = window.Chatbot.getResponse(inputText)

        setSubmit(prev => [
            ...prev,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            },
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ])
        

         setInputText("");
    }

    return (
        <main>
            <div>
                <label>
                    <input 
                        type="text"
                        className='textInput'
                        placeholder='Ask anything'
                        value={inputText}
                        onChange={handleChange}
                        />
                </label> 
                <button 
                    className='sendBtn'
                    onClick={sendMessage}
                >Send</button>
            </div>
        </main>
    )
}