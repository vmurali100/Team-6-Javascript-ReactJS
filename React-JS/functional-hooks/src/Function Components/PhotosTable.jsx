import React from "react"
const PhotosTable=({pho})=>{
    return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>albumId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailurl</th>
                    </tr>
                </thead>
                <tbody>
                    {pho.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.albumId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.url}</td>
                            <td>{user.thumbnailurl}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default PhotosTable