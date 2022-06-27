import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Filltextchild = ({getdata}) => {
    const [filltext,setFilltext]=useState([])
    const senddatatoparent=()=>{
        getdata(filltext)
    }
    useEffect(()=>{
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").then((respose)=>{setFilltext(respose.data)})
    })
  return (
    <div>
      <button onClick={senddatatoparent}>send data to parent</button>
    </div>
  )
}

export default Filltextchild
