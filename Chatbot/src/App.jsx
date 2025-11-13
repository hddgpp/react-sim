import React from "react";
import InputText from "./components/Input-text/Input-text.jsx";
import ChatMessage from "./components/ChatMessage/ChatMessage.jsx";
import './App.css'

export default function App() {

   const [submit, setSubmit] = React.useState([])
  

  return(
    <div className="generale">
     <ChatMessage submit={submit}/>
      <InputText setSubmit={setSubmit}/>
    </div>
  )
}