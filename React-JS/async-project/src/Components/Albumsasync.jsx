import React from 'react'

const Albumsasync = () => {
    const GetAllAlbums = async ()=>{
        var Albumsusers = await fetch("https://jsonplaceholder.typicode.com/albums")
        var data = await Albumsusers.json()
        console.log(data)
    }
  return (
    <div>
        <button onClick={GetAllAlbums}>Get Data Albums</button>
    </div>
  )
}

export default Albumsasync