import React from 'react'

const Photos = () => {
    const getallphotos = async()=>{
        var photos = await fetch ("https://jsonplaceholder.typicode.com/photos")
        var data = await photos.json()
        console.log(data)
    }
  return (
    <div>
      <button onClick={getallphotos}>get all photos</button>
    </div>
  )
}

export default Photos
