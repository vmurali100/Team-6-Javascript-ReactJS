import { useState } from "react";
import { Component } from "react";
import { Sib1 } from "./Sib1";
import { Sib2 } from "./Sib2";

export function Sib1and2 (){
    const [message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[photos,setphotos]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendphotos=(photos)=>{
        setphotos(photos) 
    }
    return(
        <div>
            <Sib1 sendmessage={sendmessage} sendperson={sendperson} sendphotos={sendphotos}/>
            <Sib2 message={message} person={person} photos={photos}/>
        </div>
    )
}
