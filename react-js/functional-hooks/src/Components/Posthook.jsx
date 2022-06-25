import axios from "axios"
import {useEffect, useState } from "react"
import Posttab from "./Posttab"

const Posthook=()=>{
    const[post,setPost]=useState([])
    useEffect(()=>{
       const url="https://jsonplaceholder.typicode.com/posts"
       axios.get(url).then((response)=>{setPost(response.data)})
    },[])
    return(
        <div>
           <Posttab allpost={post}/>
        </div>
    )

}
export default Posthook