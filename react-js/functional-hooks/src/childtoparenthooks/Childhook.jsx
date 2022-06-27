import React from 'react';
import {useEffect, useState } from 'react';
import axios from 'axios'

const Childhook = ({sendUser}) => {
    const[usersid,setUsers]=useState([])
    
    useEffect(()=>{
           const url="http://localhost:3000/users"
           axios.get(url).then((response)=>{setUsers(response.data)})
    },[])
    const sendtoparent=()=>{
        sendUser(usersid)
    }
    return( <div>
        <button onClick={sendtoparent}>send to parent</button>
    </div>
    )
}



export default Childhook;