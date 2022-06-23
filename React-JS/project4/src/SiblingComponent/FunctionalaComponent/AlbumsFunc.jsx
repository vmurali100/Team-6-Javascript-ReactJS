import { useState } from "react"
import { AlbumsFunc1 } from "./AlbumsFunc1"
import { AlbumsFunc2 } from "./AlbumsFunc2"

export const AlbumsFunc=()=>{
    const [message,setmessage]=useState("")
    const [person,setperson]=useState({})
    const [album,setalbum]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }

    const sendperson=(person)=>{
        setperson(person)    
    }

    const sendalbum=(album)=>{
        setalbum(album)
    }

    return(
     <div>
        <AlbumsFunc1 sendmessage={sendmessage} sendperson={sendperson} sendalbum={sendalbum}/>
        <AlbumsFunc2 message={message} person={person} album={album}/>        
     </div>
    )
}
