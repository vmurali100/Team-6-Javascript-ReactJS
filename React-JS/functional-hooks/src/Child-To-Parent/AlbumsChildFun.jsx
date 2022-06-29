import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const AlbumsChildFun = ({getdata}) => {
    
    const [AlbumsUsers,setAlbumsUsers]=useState([])
    const senddatatoparent =()=>{
        getdata(AlbumsUsers)
    }
    useEffect(()=>{
        const sai="https://jsonplaceholder.typicode.com/albums";
          axios.get(sai).then((response)=>{setAlbumsUsers(response.data)})
    },[])
  return (
    <div>
        <button onClick={senddatatoparent}>send data to parent</button>
    </div>
  )
}
