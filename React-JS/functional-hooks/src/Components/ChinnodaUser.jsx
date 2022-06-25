import axios from 'axios';
import React from 'react'
import { useEffect ,useState} from 'react'
import ChinnodaUsertable from './ChinnodaUserTable';

export default function ChinnodaUser() {
    const [allUsers, setAllUsers] = useState([])

    useEffect(()=>{
        const url="http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&pretty=true"
        
        axios.get(url).then((response)=>{setAllUsers(response.data)})

    },[])
  return (
    <div>
        <ChinnodaUsertable Chinnodauser={allUsers}/>
    </div>
  )
}
