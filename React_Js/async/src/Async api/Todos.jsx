import React from 'react'

const Todos = () => {
    const getalltodos=async()=>{
        var todos = await fetch("https://jsonplaceholder.typicode.com/todos")
        var data = await todos.json();
        console.log(data)
    }
  return (
    <div>
      <button onClick={getalltodos}>get all todos</button>
    </div>
  )
}

export default Todos
