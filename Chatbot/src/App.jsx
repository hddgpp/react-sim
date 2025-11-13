import React from "react";
import InputText from "./components/Input-text/Input-text.jsx";
import ChatMessage from "./components/ChatMessage/ChatMessage.jsx";
import './App.css'

export default function App() {
  const [submit, setSubmit] = React.useState([{
    sender: 'robot',
    message: 'Hi im Leo, ask me anything!'
  }])

  return(
    <div className="generale">
      <ChatMessage submit={submit}/>
      <InputText setSubmit={setSubmit} submit={submit}/>
    </div>
  )
}