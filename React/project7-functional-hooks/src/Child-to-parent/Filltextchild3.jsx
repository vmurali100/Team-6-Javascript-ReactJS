import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const Filltextchild3 = ({getData}) => {

    const [filltext3, setfilltext3] = useState([])
    const sendDatatoparent=()=>{
        getData(filltext3)
    }
    useEffect(()=>{
        axios.get("  http://localhost:3000/filltext2").then((response)=>{setfilltext3(response.data)})
    })
  return (
    <div>
        <button onClick={sendDatatoparent}>send data to parent</button>
    </div>
  )
}

