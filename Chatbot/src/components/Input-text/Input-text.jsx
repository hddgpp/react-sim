import React from 'react'

export default function InputText({setSubmit}) {

    const [inputText, setInputText] = React.useState('')

    function handleChange(event) {
        setInputText((event.target.value))
    }

    function sendMessage() {

         if (inputText.trim() === "") return; 

        setSubmit(prev => [
            ...prev,
            {
                message: inputText,
                sender: 'user',
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
                    className='submitBtn'
                    onClick={sendMessage}
                >Send</button>
            </div>
        </main>
    )
}