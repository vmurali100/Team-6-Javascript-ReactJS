import React,{useState} from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

export function Component1and2 (){
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
            <Comp1 sendMessage={sendMessage} sendPerson={sendPerson} sendUsers={sendUsers}/>
            <Comp2 message={message} person={person} users={users}/>
        </div>
    )
}