import { useState } from "react";
import SaiFilltext1 from "./SaiFilltext1";
import SaiFilltext2 from "./SaiFilltext2";

function SaiFilltext (){
    const [message,setmessage]=useState("")
    const [person,setperson]=useState({})
    const [AllComments,setAllComment]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }

    const sendperson=(person)=>{
        setperson(person)
    }

    const sendAllComments=(AllComments)=>{
        setAllComment(AllComments)
    }

    return(
        <div>
            <SaiFilltext1 sendmessage={sendmessage} sendperson={sendperson} sendAllComments={sendAllComments}/>
            <SaiFilltext2 message={message} person={person} AllComments={AllComments}/>
        </div>
    )
}
export default SaiFilltext