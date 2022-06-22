import { useState } from "react"
import { Func5 } from "./Func5"
import { Func6 } from "./Func6"

export const Func5and6=()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[posts,setposts]=useState([])
    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendusers=(posts)=>{
        setposts(posts)
    }
    return(
        <div>
            <Func5 sendmessage={sendmessage} sendperson={sendperson} sendusers={sendusers} />
            <Func6 message={message} person={person} posts={posts}/>
        </div>
    )
}