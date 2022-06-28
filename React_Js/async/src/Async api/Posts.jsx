import React from 'react'

const Posts = () => {
    const getallposts=async()=>{
        var postsinfo = await fetch("https://jsonplaceholder.typicode.com/posts")
        var data = await postsinfo.json();
        console.log(data)
    }
  return (
    <div>
      <button onClick={getallposts}>get all posts</button>
    </div>
  )
}

export default Posts
