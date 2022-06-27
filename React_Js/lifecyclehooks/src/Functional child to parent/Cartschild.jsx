import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Cartschild = ({getdata}) => {
    const[cartdetails,setCart]=useState([])
    const senddatatoparent=()=>{
        getdata(cartdetails)
    }
    useEffect(()=>{
        const url="https://fakestoreapi.com/carts"
        axios.get(url).then((response)=>{setCart(response.data)})
    },[])
  return (
    <div>
      <button onClick={senddatatoparent}>send data to parent</button>
    </div>
  )
}

export default Cartschild
