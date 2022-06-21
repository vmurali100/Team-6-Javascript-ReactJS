
import './App.css';
import Ccarts1 from './Sibling class/Ccarts1';
import Ccarts2 from './Sibling class/Ccarts2';
import React, { useState } from 'react';

function App() {
  const [message, setmessage] = useState("")
  const [person, setperson] = useState({})
  const [carts, setcarts]= useState([])


  const sendmessage = (message) => {
    setmessage(message)
  }
  const sendperson = (person) => {
    setperson(person)
  }
  const sendcarts = (carts) => {
    setcarts(carts)
  }

  return (
    <div className="App">
      <Ccarts1 sendmessage={sendmessage} sendperson={sendperson} sendcarts={sendcarts} />
      <Ccarts2 message={message} person={person} carts={carts} />
    </div>
  );
}

export default App;

