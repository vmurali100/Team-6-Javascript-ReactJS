import { useState } from "react"

export const TodoChild10 = ({ person, message, users }) => {
    const [] = useState()
    return (
        <div>
            {Object.values(person).length > 0 && <p>person details from parent:{person.fname}-{person.lname}</p>}
            {message && <p>message  from parent:{message}</p>}

            {users.length > 0 &&  
                <table border={1}> 
                <thead>
                    <tr>
                        <th>userid</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,p)=>{
                        return <tr>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.completed}</td>
                        </tr>
                    })}
                </tbody>
                </table>


             }

        </div>
    )
}