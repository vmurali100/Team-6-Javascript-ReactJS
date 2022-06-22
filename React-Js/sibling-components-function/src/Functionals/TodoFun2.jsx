import React,{useState} from "react"

export const TodoFun2=({message,person,todos})=>{
    const[]=useState()
    return(
        <div>
            <p>{message}</p>
            <p>{person.name} {person.email}</p>
            <table border={1}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.completed}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
} 