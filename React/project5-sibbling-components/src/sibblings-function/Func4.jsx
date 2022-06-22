import { useReducer, useState, useSyncExternalStore } from "react"

export const Func4=({message,person,users})=>{
    const[]=useState()
    return(
        <div>
            <p>{message}</p>
            <p>{person.fname} {person.lname}</p>
            {users.length > 0 &&   <table border={1}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.completed}</td>
                        </tr>
                    })}
                </tbody>
            </table>}
          
        </div>
    )
}