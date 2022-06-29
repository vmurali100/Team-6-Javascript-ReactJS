import React from 'react'

const TodosAsync = () => {
    const getAllTodos = async () =>{
        var TodosUsers = await fetch ("https://jsonplaceholder.typicode.com/todos");
        var data = await TodosUsers.json()

        console.log(data)
    }
  return (
    <div>
        <button onClick={getAllTodos}> Get All todos</button>
    </div>
  )
}

export default TodosAsync