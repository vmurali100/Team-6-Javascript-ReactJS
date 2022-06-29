import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const PostsChildFunComp = ({getdata}) => {
    const[AllPosts,setAllPosts]=useState([])
    const senddatatoparent=()=>{
        getdata(AllPosts)
    }
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/posts";
        axios.get(url).then((response)=>{setAllPosts(response.data)})
    },[])
  return (
    <div>
          <button onClick={senddatatoparent}>senddatatoParent</button>
    </div>
  )
}
export default PostsChildFunComp
