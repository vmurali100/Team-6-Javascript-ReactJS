import axios from 'axios';
import React from 'react';
import {useEffect, useState } from 'react';
import Todostab from './Todostab';

const Todoshook = () => {
    const[Tod,setTod]=useState([])
    useEffect(()=>{
        const url="http://localhost:3000/todos"
          axios.get(url).then((Response)=>{setTod(Response.data)})
    },[])
    return <div>
      <Todostab alltods={Tod}/>
    </div>;
}



export default Todoshook;