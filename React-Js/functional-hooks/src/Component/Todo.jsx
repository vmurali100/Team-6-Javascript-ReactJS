import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { TodoTable } from './TodoTable';

const Todo = () => {
    const [allTodos, setAllTodos] = useState([]);
    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/todos"
        axios.get(url).then((respons)=>{setAllTodos(respons.data)})
    },[])
  return (
    <div>
        <TodoTable todoDetalis={allTodos} />
    </div>
  )
}

export default Todo