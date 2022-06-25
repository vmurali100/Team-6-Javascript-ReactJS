import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Practice5_todosTable } from './Practice5_todosTable'

const Practice5 = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
         const url = "https://jsonplaceholder.typicode.com/todos"
         axios.get(url).then((response)=>{
            setTodos(response.data)
         })
      
    }, [])
    
  return (
    <div>
        <p>Practice5</p>
        <Practice5_todosTable Todos={todos}/>
    </div>
  )
}

export default Practice5