import { useState } from "react"

export const TodosFunc2 = ({ message, person, todos }) => {
    const [] = useState()

    return (
        <div>
            <p>Hii sai</p>
            <p>{message}</p>
            <p>{person.fname}{person.lname}</p>
            <ul>
                <table border="1">
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todos, i) => {
                            return <tr key={i}>
                                <td>{todos.userId}</td>
                                <td>{todos.id}</td>
                                <td>{todos.title}</td>
                                <td>{todos.completed}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                
            </ul>
        </div>
    )
}