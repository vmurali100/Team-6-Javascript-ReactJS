import { useState } from "react"
import { FtodosChild8 } from "./FtodosChild8"

export const Ftodos8=()=>{
    const[todoinfo,settodoinfo]=useState([])
    const recieveDataFromChild=(todos)=>{
        settodoinfo(todos)
    }
    return(
        <div>
            <FtodosChild8 getTodo={recieveDataFromChild}/>
            <p>data from child</p>
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
                    {todoinfo.map((user)=>{
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