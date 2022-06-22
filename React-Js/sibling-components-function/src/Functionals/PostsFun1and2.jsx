import { useState } from "react"
import { PostsFun1 } from "./PostsFun1"
import { PostsFun2 } from "./PostsFun2"

export const PostsFun1and2 =()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[posts,setPosts]=useState([])
    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendposts=(users)=>{
        setPosts(users)
    }
    return(
        <div>
            <PostsFun1 sendmessage={sendmessage} sendperson={sendperson} sendposts={sendposts}/>
            <PostsFun2  message={message} person={person} posts={posts}/>
        </div>
    )
} 