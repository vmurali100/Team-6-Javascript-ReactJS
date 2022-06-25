import React from 'react'

export const Poststable1 = ({userPosts}) => {
  return (
    <div>
          <table border={1}>
                <thead>
                    <tr>
                    <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>email</th>
                      
                      
                    </tr>
                </thead>
                <tbody>
                    {userPosts.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                            <td>{user.email}</td>
                           
                           
                        </tr>
                    })}
                </tbody>
            </table>
    </div>
  )
}
