import { useState } from "react"
import { Falbums1 } from "./Falbums1"
import { Falbums2 } from "./Falbums2"
import { Fcomments1 } from "./Fcomments1"
import { Fcomments2 } from "./Fcomments2"
import { Fphotos1 } from "./Fphotos1"
import { Fphotos2 } from "./Fphotos2"
import { Fproducts1 } from "./Fproducts1"
import { Fproducts2 } from "./Fproducts2"
import { Fusers1 } from "./Fusers1"
import { Fusers2 } from "./Fusers2"

export const Functional=()=>{
    const[message,setmessage]=useState("")
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
            <Fphotos1 sendmessage={sendmessage} sendperson={sendperson} sendphotos={sendphotos}/>
            <Fphotos2 message={message} person={person} photos={photos}/>
        </div>
    )

}