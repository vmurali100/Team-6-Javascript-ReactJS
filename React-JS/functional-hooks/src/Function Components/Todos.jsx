import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import TodosTable from './TodosTable'

export const Todos = () => {
const [todos, settodos] = useState([])
useEffect(()=>{
    const url="http://localhost:3000/todos"
    axios.get(url).then((Response)=>{settodos(Response.data)})
},[])
  return (
    <div>
       <TodosTable todo={todos}/> 
    </div>
  )
}
export default Todos