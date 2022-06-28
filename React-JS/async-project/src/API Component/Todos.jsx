import React from 'react'

const Todos = () => {
    const getalltodos=async()=>{
        var todosinfo=await fetch("https://jsonplaceholder.typicode.com/todos")
        var todos=await todosinfo.json()
        console.log(todos)
    }
  return (
    <div>
        <button onClick={getalltodos}>click me i have todos</button>
    </div>
  )
}

export default Todos