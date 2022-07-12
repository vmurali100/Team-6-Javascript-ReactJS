import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { AlbumsTable } from './AlbumsTable';

const Albums = () => {
    const [allalbums, setAllalbums] = useState([]);
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/albums"
        axios.get(url).then((respons)=>{setAllalbums(respons.data)})
    },[])
  return (
    <div>
        <AlbumsTable albumDetails={allalbums}/>
    </div>
  )
}

export default Albums