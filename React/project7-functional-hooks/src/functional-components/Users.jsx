import React from 'react'
import axios from 'axios'
import { useEffect ,useState} from 'react'
import { UsersTable } from './UsersTable'

export const Users = () => {
    const [allusers, setAllusers] = useState([])
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/posts"
        axios.get(url).then((response)=>{setAllusers(response.data)})
    },[])
  return (
    <div>
        <UsersTable jsonPostsUsers={allusers}/>        
    </div>
  )
}
