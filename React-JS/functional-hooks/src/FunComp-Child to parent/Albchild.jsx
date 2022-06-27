import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
export const Albchild = ({getdata}) => {
    const[albdetails,setalbm]=useState([])
    const senddatatoparent=()=>{
        getdata(albdetails)
    }
    useEffect(()=>{
        const albdetails="https://jsonplaceholder.typicode.com/albums"
        axios.get(albdetails).then((Response)=>{setalbm(Response.data)})
    },[])
  return (
    <div>
        <button onClick={senddatatoparent}>send data to parent</button>
    </div>
  )
}
export default Albchild