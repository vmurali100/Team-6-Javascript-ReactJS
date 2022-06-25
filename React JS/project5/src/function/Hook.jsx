import { useState } from 'react';
 import axios from 'axios'
import { Hook1 } from './Hook1';
import { useEffect } from 'react';

 export function Hook(){
    const [allUsers, setAllUsers] = useState([]);
    useEffect(()=>{
        const url="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
        
        axios.get(url).then((response)=>{setAllUsers(response.data)})

    },[])
  return (
    <div>
        <Hook1 all={allUsers}/>
    </div>
  )
}

