import React from 'react'

const Albams = () => {
    const getallAlbum=async()=>{
        var albuminfo=await fetch("https://jsonplaceholder.typicode.com/albums")
        var album=await albuminfo.json()
        console.log(album)
    }
  return (
    <div>
        <button onClick={getallAlbum}>click me to see console</button>
    </div>
  )
}

export default Albams