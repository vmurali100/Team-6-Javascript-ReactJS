import React from 'react'
import { useState } from 'react'

const F2 = () => {
    const[count,setCount]=useState([])
  return (
    <div>
     <p>you clicked {count}</p>
     <button onClick={()=>setCount(count+1)}>clicked me</button>
    </div>
  )
}

export default F2
