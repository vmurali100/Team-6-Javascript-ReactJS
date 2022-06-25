import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Filltexttable2 from './Filltexttable2';

const Filltext2 = () => {
    const[allfilltext,setAllfilltext]=useState([]);
    useEffect(()=>{
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true").then((response)=>{setAllfilltext(response.data)})
    },[])
  return (
    <div>
      <Filltexttable2 filltextusers={allfilltext}/>
    </div>
  )
}

export default Filltext2
