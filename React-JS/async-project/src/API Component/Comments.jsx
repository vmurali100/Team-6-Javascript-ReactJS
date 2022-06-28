import React from 'react'

const Comments = () => {
    const getallcomments=async()=>{
        var commentsinfo=await fetch ("https://jsonplaceholder.typicode.com/comments")
        var comment=await commentsinfo.json()
        console.log(comment)
    }
  return (
    <div>
        <button onClick={getallcomments}>click</button>
    </div>
  )
}

export default Comments