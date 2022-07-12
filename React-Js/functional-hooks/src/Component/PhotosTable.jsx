import React from 'react'

export const PhotosTable = ({allPhotosDetails}) => {
  return (
    <div>
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
                {allPhotosDetails.map((users,i)=>{
                    return <tr key={i}>
                        <td>{users.postId}</td>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.body}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
