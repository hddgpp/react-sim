import Chat from "./components/Chat/Chat.jsx";
import InputText from "./components/Input-text/Input-text.jsx";

export default function App() {
  const chat = [{
    message: 'hello there',
    sender: 'user'
  },{
    message: 'hi how can i help you?',
    sender: 'robot'
   }
  ]
  const chatMessage = chat.map((chatMessages) => {
    return(
      <Chat 
        message={chatMessages.message}
        sender={chatMessages.sender}/>
    )
  })
  return(
    <>
     <InputText/>
     {chatMessage}
    </>
  )
}