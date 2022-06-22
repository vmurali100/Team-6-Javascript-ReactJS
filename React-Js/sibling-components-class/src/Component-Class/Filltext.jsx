import { useState } from "react";
import FilltextComp1 from "./FilltextComp1";
import FilltextComp2 from "./FilltextComp2";

export function Filltext (){
    const [message, setmessage]=useState("")
    const [person, setPerson]=useState({})
    const [filltext, setFilltext]=useState([])

    const sendMessage = (msg)=>{
        setmessage(msg)
    }
    const sendPerson = (per) =>{
        setPerson(per)
    }
    const sendFilltext = (text) =>{
        setFilltext(text)
    }
    return(
        <div>
            <FilltextComp1 sendMessage={sendMessage} sendPerson={sendPerson} sendFilltext={sendFilltext}/>
            <FilltextComp2 message={message} person={person} filltext={filltext}/>
        </div>
    )
}