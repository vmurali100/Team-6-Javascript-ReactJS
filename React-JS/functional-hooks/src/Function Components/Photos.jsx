import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import PhotosTable from './PhotosTable'

export const Photos = () => {
    const [photos, setPhotos] = useState([])
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/photos"
        axios.get(url).then((Response)=>{setPhotos(Response.data)})
    },[])

  return (
    <div>
        <PhotosTable pho={photos}/>
    </div>
  )
}
export default Photos