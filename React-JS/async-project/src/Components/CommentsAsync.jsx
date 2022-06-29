import React from 'react'

const CommentsAsync = () => {
    const GetAllComments = async ()=>{
        var CommnetsDetails = await fetch ("https://jsonplaceholder.typicode.com/comments");
        var data = await CommnetsDetails.json()
        console.log(data)
    }
  return (
    <div>
        <button onClick={GetAllComments}>Get All Comments</button>
    </div>
  )
}

export default CommentsAsync