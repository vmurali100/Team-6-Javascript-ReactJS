
import Comp1 from './Sibling Components/Child to Parent-Class/Comp1';
import { useState } from 'react';
import Comp2 from './Sibling Components/Child to Parent-Class/Comp2';

function App() {
  const[ message,setmessage]=useState("")
  const[person,setperson]=useState({})
  const[users,setusers]=useState([])

  const sendmessage=(message)=>{
    setmessage(message)
  }
  const sendperson=(person)=>{
    setperson(person)
  }
 const senduser=(usersinfo)=>{
  setusers(usersinfo)
 }
  return (
    <div className="App">
     <Comp1 sendmessage={sendmessage} sendperson={sendperson} senduser={senduser}/>
    <Comp2 message={message} person={person} users={users}/>
    </div>
  );
}

export default App;
