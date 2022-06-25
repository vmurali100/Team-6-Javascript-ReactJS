import { useState } from 'react';
 import axios from 'axios'
import { useEffect } from 'react';
import { Moon } from './Moon';

 export function Sun(){
    const [allUsers, setAllUsers] = useState([]);
    useEffect(()=>{
        const url="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true"
        
        axios.get(url).then((response)=>{setAllUsers(response.data)})

    },[])
  return (
    <div>
        <Moon all={allUsers}/>
    </div>
  )
}

