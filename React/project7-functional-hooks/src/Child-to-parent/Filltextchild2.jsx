import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const Filltextchild2 = ({getData}) => {
    const [filltext1, setfilltext1] = useState([])
    const sendDatatoparent=()=>{
        getData(filltext1)
    }
    useEffect(()=>{
    axios.get(" http://localhost:3000/true1").then((response)=>{setfilltext1(response.data)})
    })
  return (
    <div>
        <button onClick={sendDatatoparent}>send data to parent</button>
    </div>
  )
}
