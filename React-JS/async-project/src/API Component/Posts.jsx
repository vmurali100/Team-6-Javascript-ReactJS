import React from 'react'

const Posts = () => {
    const getallposts=async ()=>{
        var postinfo=await fetch("https://jsonplaceholder.typicode.com/posts")
        var post=await postinfo.json()
        console.log(post)
    }
  return (
    <div>
        <button onClick={getallposts}>click i will displaying posts</button>
    </div>
  )
}

export default Posts