import React,{useState} from "react";
import CompA1 from "./CompA1";
import CompA2 from "./CompA2";

export function CompA1A2 (){
    const [message,setmessage]=useState("")
    const [person, setPerson]=useState({})
    const [users, setUsers]=useState([])

    const sendMessage = (msg) =>{
        setmessage(msg)
    }
    const sendPerson = (per) =>{
        setPerson(per)
    }
    const sendUsers = (userInfo) =>{
        setUsers(userInfo)
    }
    return(
        <div>
            <CompA1 sendMessage={sendMessage} sendPerson={sendPerson} sendUsers={sendUsers}/>
            <CompA2 message={message} person={person} users={users}/>
        </div>
    )
}