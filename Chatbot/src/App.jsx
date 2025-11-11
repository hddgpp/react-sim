import Chat from "./components/Chat/Chat.jsx";
import InputText from "./components/Input-text/Input-text.jsx";

export default function App() {
  return(
    <>
     <InputText/>
     <Chat 
        message="hello there" 
        sender="user"/>
     <Chat 
        message="hi how can i help you?" 
        sender="robot"/>
    </>
  )
}