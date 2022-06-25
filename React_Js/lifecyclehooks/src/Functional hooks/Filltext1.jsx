import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Filltexttable1 from './Filltexttable1';

const Filltext1 = () => {
    const[allfilltext,setAllfilltext]=useState([]);
    useEffect(()=>{
        axios.get("http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then((response)=>{setAllfilltext(response.data)})
    },[])
  return (
    <div>
      <Filltexttable1  filltextUsers={allfilltext}/>
    </div>
  )
}

export default Filltext1
