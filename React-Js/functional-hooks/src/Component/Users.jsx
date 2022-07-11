import { useEffect,useState } from 'react';
import axios from 'axios'
import { UsersTable } from './UsersTable';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/posts"
        axios.get(url).then((respons)=>{setAllUsers(respons.data)})
    },[])
  return (
    <div>
        <UsersTable filltextUsers={allUsers}/>
    </div>
  )
}

export default Users