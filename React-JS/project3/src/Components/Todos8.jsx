import { useState } from "react"
import { Todos8Child } from "./Todos8Child"

export const Todos8 =()=>{
    const [allusertodos,setallusertodos]=useState([])
    
    const recievedata = (usertodos)=>{
        setallusertodos(usertodos)
    }
    return (
        <div>
            <Todos8Child getdata={recievedata}/>
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
                    {allusertodos.map((user,i)=>{
                        return <tr>
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