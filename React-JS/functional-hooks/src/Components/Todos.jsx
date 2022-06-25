import axios from 'axios';
import React from 'react'
import { useEffect,useState} from 'react'
import Todostable from './TodosTable';

export default function Todos() {
    const [alltodos, setAllTodos] = useState([])

    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/todos";
        axios.get(url).then((response)=>{setAllTodos(response.data)})
    },[])

  return (
    <div>
      <Todostable TodosDetails={alltodos}/>
    </div>
  )
}
