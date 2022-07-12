 import React from 'react'
 export const TodosClassTable =({TodosUsers})=>{
    return(
        <div>
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
                    {TodosUsers.map((user,i)=>{
                        return(
                            <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.completed}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
 }