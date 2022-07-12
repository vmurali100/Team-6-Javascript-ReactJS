import { useEffect,useState } from 'react';
import axios from 'axios'
import { PhotosTable } from './PhotosTable';

const Photos = () => {
    const [allPhotos, setAllPhotos] = useState([]);
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/posts"
        axios.get(url).then((respons)=>{setAllPhotos(respons.data)})
    },[])
  return (
    <div>
        <PhotosTable allPhotosDetails={allPhotos} />
    </div>
  )
}

export default Photos