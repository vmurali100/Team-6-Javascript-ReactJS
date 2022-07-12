import React from 'react'

export const TodoTable = ({todoDetalis}) => {
  return (
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
                {todoDetalis.map((users,i)=>{
                    return <tr key={i}>
                        <td>{users.userId}</td>
                        <td>{users.id}</td>
                        <td>{users.title}</td>
                        <td>{users.completed}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
