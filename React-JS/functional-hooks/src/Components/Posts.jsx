import axios from 'axios';
import React from 'react'
import { useEffect ,useState} from 'react'
import Poststable from './Poststable';

export default function Posts() {
    const [allpost, setAllpost] = useState([])
    useEffect(()=>{

        const url="https://jsonplaceholder.typicode.com/posts";
        axios.get(url).then((response)=>{(setAllpost(response.data))})

    },[])
  return (
    <div>
        <Poststable AllPostsUsers={allpost}/>
    </div>
  )
}
