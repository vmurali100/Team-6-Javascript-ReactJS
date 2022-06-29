import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const TodosChildFun = ({getdata}) => {
    const [Todos,setTodos]=useState([])
    const senddatatoparent =()=>{
           getdata(Todos)
    }

    useEffect (()=>{
        const raju="https://jsonplaceholder.typicode.com/todos";
        axios.get(raju).then((response)=>{setTodos(response.data)})
    },[])
  return (
    <div>
        <button onClick={senddatatoparent}>sendtoparent</button>
    </div>
  )
}
