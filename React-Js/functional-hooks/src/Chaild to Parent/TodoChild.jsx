import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const TodoChild = ({getdata}) => {
    const [todos, setPhotos] = useState([])
    const senddatatoparent=()=>{
        getdata(todos)
    }
    useEffect(()=>{
      const url ="http://localhost:3000/todos"
        axios.get(url).then((response)=>{setPhotos(response.data)})
    })
  return (
    <div>
        <button onClick={senddatatoparent}>send data to parent</button>
    </div>
  )
}