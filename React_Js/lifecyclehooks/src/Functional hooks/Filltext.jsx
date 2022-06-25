import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import Filltexttable from './Filltexttable';


const Filltext = () => {
    const [allfilltext,setAllfilltext]=useState([]);
    useEffect(()=>{
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").then((response)=>{setAllfilltext(response.data)})
    },[])
  return (
    <div>
        <Filltexttable filltextUsers={allfilltext}/>
    </div>
  )
}

export default Filltext
