import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

export const Todoschild = ({getdata}) => {
    const[todo,setTodo]=useState([])
    const senddatatoparent=()=>{
        getdata(todo)
    }
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{setTodo(response.data)})
    })
  return (
    <div>
      <button onClick={senddatatoparent}>send data to parent </button>
    </div>
  )
}

export default Todoschild
