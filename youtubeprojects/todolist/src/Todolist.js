import React from 'react'

export const Todolist = ({todolist,deletehandler}) => {
  return (
    <div>
        {todolist.map((todo,index)=>
        <div key={index}>
            <h5>{todo} &nbsp; <button onClick={()=>deletehandler(index)}>Delete</button></h5>
        </div>
            )}
    </div>
  )
}
