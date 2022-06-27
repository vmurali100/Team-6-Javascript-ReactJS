import axios from 'axios'
import React from 'react'
import { useEffect ,useState} from 'react'

export const Todoschild = ({getdata}) => {
    const [todo, settodo] = useState([])
    const receivedata=()=>{
        getdata(todo)
    }
    useEffect(()=>{
        const todo="https://jsonplaceholder.typicode.com/todos"
        axios.get(todo).then((response)=>{settodo(response.data)})
    },[])
  return (
    <div>
        <button onClick={receivedata}>click here</button>
    </div>
  )
}
export default Todoschild
