import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CommentsTable from './CommentsTable'

export const Comments = () => {
    const [comments,setComments]=useState([])
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/comments"
        axios.get(url).then((Response)=>{setComments(Response.data)})
    },[])
  return (
    <div>
        <CommentsTable com={comments}/>
    </div>
  )
}
export default Comments