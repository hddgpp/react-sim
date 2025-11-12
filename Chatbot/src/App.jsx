import React from "react";
import InputText from "./components/Input-text/Input-text.jsx";
import ChatMessage from "./components/ChatMessage.jsx";
import './App.css'

export default function App() {

   const [submit, setSubmit] = React.useState([])
  

  return(
    <div className="generale">
     <InputText setSubmit={setSubmit}/>
     <ChatMessage submit={submit}/>
    </div>
  )
}