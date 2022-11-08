import React, { useEffect } from 'react'
import axios from 'axios'

export default function Hellow() {
    useEffect=(()=>{
        axios.get("https://reqres.in/api/users?page=1").then((res)=>{
            console.log(res.data)
        })
    },[])
  return (
    <div>Hellow</div>
  )
}

 
