import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'

export const Commentchild = ({getdata}) => {
const [comment, setcomment] = useState([])
const senddatatoparent=()=>{
    getdata(comment)
}
useEffect(()=>{
    const comment="https://jsonplaceholder.typicode.com/comments"
    axios.get(comment).then((response)=>{setcomment(response.data)})
},[])
  return (
    <div>
        <button onClick={senddatatoparent}>click</button>
    </div>
  )
}
export default Commentchild