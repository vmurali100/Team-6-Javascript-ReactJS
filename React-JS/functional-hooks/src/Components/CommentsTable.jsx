import React from 'react'
const CommentsTable = ({CommentsUsers})=>{
   return (
    <table border="1">
        <thead>
            <tr>           
                <th>postId</th>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            {CommentsUsers.map((user,i)=>{
                return (
                    <tr key={i}>
                        <td>{user.postId}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.body}</td>


                    </tr>
                )
            })}
        </tbody>
    </table>
   )
}
export default CommentsTable