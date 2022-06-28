import React from 'react'

const Albums = () => {
    const getallalbums=async()=>{
        var albums = await fetch("https://jsonplaceholder.typicode.com/albums")
        var data = await albums.json()
        console.log(data)
    }
  return (
    <div>
      <button onClick={getallalbums}>get all albums</button>
    </div>
  )
}

export default Albums
