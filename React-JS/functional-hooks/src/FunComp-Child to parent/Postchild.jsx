import axios from 'axios'
import React from 'react'
import { useEffect,useState} from 'react'

export const Postchild = ({getdata}) => {
    const [post, setpost] = useState([])
    const datareceive=()=>(
        getdata(post)
    )
    useEffect(()=>{
        const post=" https://jsonplaceholder.typicode.com/posts"
        axios.get(post).then((Response)=>{setpost(Response.data)})
    },[])
  return (
    <div>
        <button onClick={datareceive}>click me</button>
    </div>
  )
}
export default Postchild