import { useState } from "react"
import { PostsFunc1 } from "./PostsFunc1"
import { PostsFunc2 } from "./PostsFunc2"

export const PostsFunc =()=>{
    const [message,setmessage]=useState("")

    const [person,setperson]=useState({})

    const [posts,setposts]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }

    const sendperson=(person)=>{
        setperson(person)
    }

    const sendposts=(posts)=>{
        setposts(posts)
    }

    return(
        <div>
            <PostsFunc1 sendmessage={sendmessage} sendperson={sendperson} sendposts={sendposts}/>
            <PostsFunc2 message={message} person={person} posts={posts}/>
        </div>
    )
}