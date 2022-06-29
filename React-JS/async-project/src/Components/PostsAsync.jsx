import React from 'react'

const PostsAsync = () => {
     const getAllPosts = async ()=>{
        var AllPostsusers = await fetch ("https://jsonplaceholder.typicode.com/posts");
        var data = await AllPostsusers.json()
        console.log(data)
     }
  return (
    <div>
        <button onClick={getAllPosts}>GetAllPosts</button>
    </div>
  )
}

export default PostsAsync