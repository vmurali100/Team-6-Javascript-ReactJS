import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const Photoschild = ({getdta}) => {
    const [photos, setPhotos] = useState([])
    const senddatatoparent=()=>{
        getdta(photos)
    }
    useEffect(()=>{
        axios.get("http://localhost:3000/photos").then((response)=>{setPhotos(response.data)})
    })
  return (
    <div>
        <button onClick={senddatatoparent}>send data to parent</button>
    </div>
  )
}
