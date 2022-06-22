import { useState } from "react";
import { Albumm1 } from "./Albumm1";
import { Albumm2 } from "./Albumm2";

export const Albumm=()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[album,setallalbum]=useState([])
    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendallalbum=(album)=>{
        setallalbum(album)
    }
    return(
        <div>
            <Albumm1 sendmessage={sendmessage} sendperson={sendperson} sendallalbum={sendallalbum}/>
            <Albumm2 message={message} person={person} album={album}/>
        </div>
    )
}