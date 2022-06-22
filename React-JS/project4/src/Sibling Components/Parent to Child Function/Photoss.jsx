import { useState } from "react"
import { Photoss1 } from "./Photoss1"
import { Photoss2 } from "./Photoss2"

export const Photoss=()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[photo,setallphotos]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendallphotos=(photo)=>{
        setallphotos(photo)
    }
    return(
        <div>
            <Photoss1 sendmessage={sendmessage} sendperson={sendperson} sendallphotos={sendallphotos}/>
            <Photoss2 message={message} person={person} photo={photo}/>
        </div>
    )
}