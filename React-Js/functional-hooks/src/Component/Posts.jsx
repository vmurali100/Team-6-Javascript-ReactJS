import { useEffect,useState } from 'react';
import axios from 'axios'
import { PostsTable } from './PostsTable';

const Posts = () => {
    const [allPosts, setAllPosts] = useState([]);
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/posts"
        axios.get(url).then((respons)=>{setAllPosts(respons.data)})
    },[])
  return (
    <div>
        <PostsTable allPostsDetails={allPosts}/>
    </div>
  )
}

export default Posts