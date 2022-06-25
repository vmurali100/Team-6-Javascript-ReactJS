import React from 'react'

export const Photostable = ({userPhotos}) => {
  return (
    <div>
                <table border={1}>
            <thead>
                <tr>
                 
                    <th>albumId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>url</th>
                    <th>thumbnailUrl</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {userPhotos.map((user,i)=>{
                    return <tr key={i}>
                     
                        <td>{user.albumId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.url}</td>
                        <td>{user.thumbnailUrl}</td>
                        <td>{user.email}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
