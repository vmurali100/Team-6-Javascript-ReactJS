import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Poststable from './Poststable';

const Posts = () => {
    const[allposts,setAllposts]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{setAllposts(response.data)})
    },[])
  return (
    <div>
      <Poststable  postsusers={allposts}/>
    </div>
  )
}

export default Posts
