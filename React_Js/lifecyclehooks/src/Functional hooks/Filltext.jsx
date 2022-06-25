import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import Filltexttable from './Filltexttable';


const Filltext = () => {
    const [allfilltext,setAllfilltext]=useState([]);
    useEffect(()=>{
        axios.get("  http://localhost:3000/filltext1").then((response)=>{setAllfilltext(response.data)})
    },[])
  return (
    <div>
        <Filltexttable filltextUsers={allfilltext}/>
    </div>
  )
}

export default Filltext
