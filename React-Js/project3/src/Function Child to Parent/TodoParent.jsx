import { useState } from "react"
import { TodoChild } from "./TodoChild"

export const TodoParent=()=>{
    const[todoInfo,gettodoinfo]=useState([])
    const recieveDataFromChild=(todosDetails)=>{
        gettodoinfo(todosDetails)
    }
    return(
        <div>
            <TodoChild getTodos={recieveDataFromChild}/>
            <p>Data From Todo Child</p>
            <table border={1}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>

                    </tr>
                </thead>
                <tbody>
                    {todoInfo.map((user,i)=>{
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