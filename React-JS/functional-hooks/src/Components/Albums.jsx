import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react'
import Albumstable from './AlbumsTable';

export default function Albums() {

    const [allalbums, setAllalbums] = useState([])

    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/albums";
        axios.get(url).then((response)=>{setAllalbums(response.data)})
    },[])
  return (
    <div>
        <Albumstable AlbumDeatils={allalbums}/>
    </div>
  )
}
