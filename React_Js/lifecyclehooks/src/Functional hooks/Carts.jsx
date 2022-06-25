import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cartstable from './Cartstable'
const Carts = () => {
    const[allcarts,setAllcarts]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/carts").then((response)=>{setAllcarts(response.data)})
    },[])
  return (
    <div>
      <Cartstable cartusers={allcarts}/>
    </div>
  )
}

export default Carts
