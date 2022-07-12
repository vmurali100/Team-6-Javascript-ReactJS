import React from 'react'

export const AlbumsTable = ({albumDetails}) => {
  return (
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                {albumDetails.map((users,i)=>{
                    return <tr key={i}>
                        <td>{users.userId}</td>
                        <td>{users.id}</td>
                        <td>{users.title}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
