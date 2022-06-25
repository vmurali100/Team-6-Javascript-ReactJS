import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Todostable from './Todostable';

const Todos = () => {
    const[alltodos,setAlltodos]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/todos").then((response)=>{setAlltodos(response.data)})
    },[])
  return (
    <div>
      <Todostable todousers={alltodos}/>
    </div>
  )
}

export default Todos
