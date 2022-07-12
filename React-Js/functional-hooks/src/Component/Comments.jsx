import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { Commentstable } from './Commentstable';

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const url= "https://jsonplaceholder.typicode.com/comments"
        axios.get(url).then((respons)=>{setComments(respons.data)})
    },[])
  return (
    <div>
        <Commentstable allCommentDetails={comments}/>
    </div>
  )
}

export default Comments