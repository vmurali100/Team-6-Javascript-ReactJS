import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react'
import CommentsTable from './CommentsTable';

export default function Comments() {
    const [allcomments, setAllcomments] = useState([])

    useEffect(()=>{
        const sai="https://jsonplaceholder.typicode.com/comments";
        axios.get(sai).then((response)=>{setAllcomments(response.data)})
    },[])

  return (
    <div>
        <CommentsTable CommentsUsers={allcomments}/>
    </div>
  )
}
