import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const CommentsChildFun = ({getdata}) => {
    const [Comments,setComments]=useState([])
    const senddatafromparent=()=>{
          getdata(Comments)
    }

    useEffect(()=>{
        const sai="https://jsonplaceholder.typicode.com/comments";
        axios.get(sai).then((response)=>{setComments(response.data)})
    },[])
  return (
    <div>
        <button onClick={senddatafromparent}>send data to parent</button>
    </div>
  )
}
