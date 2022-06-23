import { useState } from "react";
import Albums1 from "./Albums1";
import Albums2 from "./Albums2";

function Albums(){
    const [message,setmessage]=useState("")
    const [person,setperson]=useState({})
    const [allalbum,setallalbum]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }

    const sendperson=(person)=>{
        setperson(person)
    }

    const sendallalbum=(allalbum)=>{
        setallalbum(allalbum)
    }

    return(
        <div className="Albums">
            <Albums1 sendmessage={sendmessage} sendperson={sendperson} sendallalbum={sendallalbum}/>
            <Albums2 message={message} person={person} allalbum={allalbum}/>
        </div>
    )
}
export default Albums