import React from 'react'

const Photos = () => {
    const getallphotos=async()=>{
        var photosinfo=await fetch("https://jsonplaceholder.typicode.com/photos")
        var photo=await photosinfo.json()
        console.log(photo)
    }
  return (
    <div>
        <button onClick={getallphotos}>click here</button>
    </div>
  )
}

export default Photos