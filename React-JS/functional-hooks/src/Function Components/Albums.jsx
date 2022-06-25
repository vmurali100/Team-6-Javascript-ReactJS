import axios from 'axios'
import React from 'react'
import { useEffect,useState} from 'react'
import AlbumsTable from './AlbumsTable'

export const Albums = () => {
    const [allAlbums, setAllalbums] = useState([])
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/albums"
        axios.get(url).then((Response)=>{setAllalbums(Response.data)})
    },[])
  return (
    <div>
        <AlbumsTable album={allAlbums}/>
    </div>
  )
}
export default Albums