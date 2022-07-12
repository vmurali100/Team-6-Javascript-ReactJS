import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const Photoschild = ({getdata}) => {
    const [photos, setPhotos] = useState([])
    const senddatatoparent=()=>{
        getdata(photos)
    }
    useEffect(()=>{
      const url ="https://jsonplaceholder.typicode.com/photos"
        axios.get(url).then((response)=>{setPhotos(response.data)})
    })
  return (
    <div>
        <button onClick={senddatatoparent}>send data to parent</button>
    </div>
  )
}