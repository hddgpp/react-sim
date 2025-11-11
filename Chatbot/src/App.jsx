import Chat from "./components/Chat/Chat.jsx";
import InputText from "./components/Input-text/Input-text.jsx";

export default function App() {
  const chat = [{
    message: 'hello there',
    sender: 'user',
    id: 1
  },{
    message: 'hi how can i help you?',
    sender: 'robot',
    id: 2
   }
  ]

  const chatMessage = chat.map((chatMessages) => {
    return(
      <Chat 
        message={chatMessages.message}
        sender={chatMessages.sender}
        key = {chatMessages.id}
        />
    )
  })

  return(
    <>
     <InputText/>
     {chatMessage}
    </>
  )
}