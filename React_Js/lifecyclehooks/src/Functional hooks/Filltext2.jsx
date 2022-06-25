import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Filltexttable2 from './Filltexttable2';

const Filltext2 = () => {
    const[allfilltext,setAllfilltext]=useState([]);
    useEffect(()=>{
        axios.get(" http://localhost:3000/filltext2").then((response)=>{setAllfilltext(response.data)})
    },[])
  return (
    <div>
      <Filltexttable2 filltextusers={allfilltext}/>
    </div>
  )
}

export default Filltext2
