import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

export const Postchild = ({getdata}) => {
    const[post,setPost]=useState([])
    const senddatatoparent=()=>{
        getdata(post)
    }
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{setPost(response.data)})
    })
  return (
    <div>
      <button onClick={senddatatoparent}>send data to parent </button>
    </div>
  )
}

export default Postchild
