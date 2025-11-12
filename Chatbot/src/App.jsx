import React from "react";
import InputText from "./components/Input-text/Input-text.jsx";
import ChatMessage from "./components/ChatMessage.jsx";

export default function App() {

   const [submit, setSubmit] = React.useState([])
  

  return(
    <>
     <InputText setSubmit={setSubmit}/>
     <ChatMessage submit={submit}/>
    </>
  )
}