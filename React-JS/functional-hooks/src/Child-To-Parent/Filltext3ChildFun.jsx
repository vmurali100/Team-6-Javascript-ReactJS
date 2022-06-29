import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Filltext3ChildFun = ({getdata}) => {
    const [Filltext,setFilltext]=useState([])
    const senddatatoparent =()=>{
         getdata(Filltext)
    }

    useEffect(()=>{ 
        const url="http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&pretty=true";
        axios.get(url).then((response)=>(setFilltext(response.data)))
    },[])
  return (
    <div>
        <button onClick={senddatatoparent}>send to parent</button>
    </div>
  )
}
