import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Filltext2child = ({getdata}) => {
    const [filltext,setFilltext]=useState([])
    const senddatatoparent=()=>{
        getdata(filltext)
    }
    useEffect(()=>{
        axios.get("http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then((respose)=>{setFilltext(respose.data)})
    })
  return (
    <div>
      <button onClick={senddatatoparent}>send data to parent</button>
    </div>
  )
}

export default Filltext2child
