import React from 'react'

const Photostable = ({photos}) => {
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
            </tr>
        </thead>
        <tbody>
            {photos.map((user,i)=>{
                return(
                    <tr key={i}>
                        <td>{user.albumId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.url}</td>
                        <td><img src={user.thumbnailUrl} alt="" /></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Photostable
