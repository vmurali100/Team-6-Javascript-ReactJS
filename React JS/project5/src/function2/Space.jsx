import { useState } from 'react';
 import axios from 'axios';
import { useEffect } from 'react';
import { Ship } from './Ship';

 export function Space(){
    const [allUsers, setAllUsers] = useState([]);
    useEffect(()=>{
        const url="http://www.filltext.com/?rows=10&id=%7Bindex%7D&email=%7Bemail%7D&username=%7Busername%7D&password=%7BrandomString%7C5%7D&pretty=true"
        
        axios.get(url).then((response)=>{setAllUsers(response.data)})

    },[])
  return (
    <div>
        <Ship all={allUsers}/>
    </div>
  )
}

