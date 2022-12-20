import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Popular() {
  const [popular,setpopular]=useState([]);
  useEffect(()=>{
    getpopular();
  },[]);
    const getpopular=async()=>{
        const api=await fetch("http://localhost:3000/data")
        const data=await api.json();
        setpopular(data.receipes)
        console.log(data)
    }
  return (
    <div>
      {popular.map((receipe)=>{
        return(
          <div key={receipe.id}>
            <p>{receipe.title}</p>
          </div>
        )
      })}
    </div>
  )
}
