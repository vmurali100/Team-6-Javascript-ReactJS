import React from 'react'

export const JsonPlaceholdeUsers = ({jsonUsers}) => {
  return (
    <div>
      <table border="1">
            <thead>
          
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>phone</th>
                    <th>username</th>
                    <th>website</th>
                </tr>
            </thead>
            <tbody >
                {jsonUsers.map((user,i)=>{
                    return (
                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.username}</td>
                            <td>{user.website}</td>
                            
                        </tr>
                    )
                })}
            </tbody>
            </table>
    </div>
  )
}
