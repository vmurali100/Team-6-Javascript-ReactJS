
import { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

function Comp3(){
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
    <div className="Comp3">
    <Comp1 sendmessage={sendmessage} sendperson={sendperson} senduser={senduser}/>
    <Comp2 message={message} person={person} senduser={users}/>
    </div>
  );
}

export default Comp3;
