import React from 'react'

const Poststable=({AllPostsUsers})=>{
  return (
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>                    
                </tr>
            </thead>
            <tbody>
                 {AllPostsUsers.map((user,i)=>{
                    return( <tr key={i}>
                        <td> {user.userId}</td>
                        <td> {user.id}</td>
                        <td> {user.title}</td>
                        <td> {user.body}</td>
                    </tr>
                       
                    )
                 })}       
            </tbody>
        </table>
    </div>
  )
}
export default Poststable