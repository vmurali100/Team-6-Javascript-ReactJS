import { useState } from "react"

export const UsersFunc2=({message,person,users})=>{
    const[]=useState()

    return(
        <div>
            <p>Vamsi</p>
            <p>{message}</p>
            <p>{person.fname} {person.lname}</p>

            <ul>
                <table border="1">
                    <thead>
                        <tr>
                            <th>fname</th>
                            <th>lname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>

                            </tr>
                        })}
                    </tbody>
                </table>
            </ul>
        </div>
    )
}