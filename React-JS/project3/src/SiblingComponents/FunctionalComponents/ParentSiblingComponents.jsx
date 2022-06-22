 import React,{useState} from 'react'
import FComp1 from './FComp1'
import FComp2 from './FComp2'
 
 function ParentSiblingComponents() {
    const [Message, setMessage] = useState("")

    const [person, setperson] = useState({})

    const [Users, setUsers] = useState([])

    
    const sendMessage=(Message)=>{
      setMessage(Message)
    }

    const sendperson=(person)=>{
      setperson(person)
    }

    const sendUsers=(Users)=>{
      setUsers(Users)
    }


   return (
     <div>
        <p>Functional Sibling Components</p>
        <FComp1 sendMessage={sendMessage} sendperson={sendperson} sendUsers={sendUsers}/>
          <FComp2 Message={Message} person={person} Users={Users}/>

     </div>
   )
 }
 
 export default ParentSiblingComponents