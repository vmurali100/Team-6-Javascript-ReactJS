import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Childs1({getUsers}) {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/todos"
        axios.get(url).then((response)=>{
            setTodos(response.data)
        })
      
    }, [])

    const SendDataToParents = () =>{
        getUsers(todos)
        
    }
    
  return (
    <div>
        <p>Childs1</p>
        <button onClick={SendDataToParents}>Send Data Childs To Parents Components</button>
    </div>
  )
}

export default Childs1