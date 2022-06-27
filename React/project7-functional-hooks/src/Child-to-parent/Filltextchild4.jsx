import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const Filltextchild4 = ({getdata}) => {
    const [filltext4, setfilltext4] = useState([])
    const sendDatatoparent=()=>{
        getdata(filltext4)
    }
    useEffect(()=>{
        axios.get("http://localhost:3000/filltext3").then((response)=>{setfilltext4(response.data)})
    },[])
  return (
    <div>
        <button onClick={sendDatatoparent}>send to parent</button>
    </div>
  )
}
