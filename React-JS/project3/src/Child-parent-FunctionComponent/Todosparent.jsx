import { useState } from "react"
import { Todoschild } from "./Todoschild"

export const Todosparent=()=>{
    const[todosinfo,settodosinfo]=useState([])
    const receivetodosfromchild=(todosdetails)=>{
        settodosinfo(todosdetails)
    }
    return(
        <div>
           <Todoschild getdata={receivetodosfromchild}/>
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
                {todosinfo.map((user,i)=>{
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
export default Todosparent