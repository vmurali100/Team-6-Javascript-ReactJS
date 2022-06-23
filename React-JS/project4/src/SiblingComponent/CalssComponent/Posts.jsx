import { useState } from "react";
import Post1 from "./Posts1";
import Posts2 from "./Posts2";

function Posts(){
    const [message,setmeesage]=useState("")
    const [Posts,setPosts]=useState({})
    const [AllPosts,setAllPosts]=useState([])

    const sendmessage=(message)=>{
        setmeesage(message)
    }

    const sendPosts=(Posts)=>{
        setPosts(Posts)
    }

    const sendAllPosts=(AllPosts)=>{
        setAllPosts(AllPosts)
    }
    return(
        <div>
            <Post1 sendmessage={sendmessage} sendPosts={sendPosts} sendAllPosts={sendAllPosts}/>
            <Posts2 message={message} Posts={Posts} AllPosts={AllPosts}/>
        </div>
    )
    
}
export default Posts
