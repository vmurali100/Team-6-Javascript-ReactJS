import React,{useState} from "react"

export const FilltextFun2=({message,person,filltext})=>{
    const[]=useState()
    return(
        <div>
            <p>{message}</p>
            <p>{person.name} {person.email} {person.state} {person.city}</p>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {filltext.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
} 