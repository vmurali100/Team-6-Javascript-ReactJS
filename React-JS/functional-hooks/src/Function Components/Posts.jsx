import axios from 'axios'
import React from 'react'
import { useEffect,useState} from 'react'
import PostsTable from './PostsTable'
export const Posts = () => {
    const [posts, setposts] = useState([])
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/posts"
        axios.get(url).then((Response)=>{setposts(Response.data)})
    },[])
  return (
    <div>
        <PostsTable pos={posts}/>
    </div>
  )
}
export default Posts
