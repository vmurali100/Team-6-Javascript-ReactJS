import React,{useState} from 'react'
import FAComp1 from './FAComp1'
import FAComp2 from './FAComp2'
 
 
 
 function FACParent() {
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
        <p>FACParent</p>
        <FAComp1 sendMessage={sendMessage} sendperson={sendperson} sendUsers={sendUsers}/>
          <FAComp2 Message={Message} person={person} Users={Users}/>

     </div>
   )
 }
 
 export default FACParent