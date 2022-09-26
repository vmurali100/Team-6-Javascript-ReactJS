import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const Posts = () => {
    const[Post,setPost]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            setPost(response.data)
        })
    })
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {Post?.map((user,i)=>{
            return <li key={i}>{user?.body}</li>
        })}
      </ul>
    </div>
  )
}

export default Posts
