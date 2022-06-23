import { useState } from "react";
import Dheena1 from "./Dheena1";
import Dheena2 from "./Dheena2";

function Dheena(){
    const [message,setmessage]=useState("")

    const [person,setperson]=useState({})

    const [AllUsers,setrAllUsers]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }

    const sendperson=(person)=>{
        setperson(person)
    }

    const sendAllUsers=(AllUsers)=>{
        setrAllUsers(AllUsers)
    }

    return(
        <div className="Dheena">
            <Dheena1 sendmessage={sendmessage} sendperson={sendperson} sendAllUsers={sendAllUsers}/>
            <Dheena2 message={message} person={person} AllUsers={AllUsers}/>
        </div>
    )
}

export default Dheena