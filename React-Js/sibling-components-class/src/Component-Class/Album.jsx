import { useState } from "react";
import AlbumComp1 from "./AlbumComp1";
import AlbumComp2 from "./AlbumComp2";

export function Album (){
    const [message, setmessage]=useState("")
    const [person, setPerson]=useState({})
    const [albums, setAlbums]=useState([])

    const sendMessage = (msg)=>{
        setmessage(msg)
    }
    const sendPerson = (per) =>{
        setPerson(per)
    }
    const sendAlbums = (alb) =>{
        setAlbums(alb)
    }
    return(
        <div>
            <AlbumComp1 sendMessage={sendMessage} sendPerson={sendPerson} sendAlbums={sendAlbums}/>
            <AlbumComp2 message={message} person={person} albums={albums}/>
        </div>
    )
}