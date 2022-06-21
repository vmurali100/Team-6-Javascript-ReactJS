import React from "react";
const Children3=({posts})=>{
    return(
        <div>
             <table border="1">
            <thead>
                <tr>
                    <th>userid</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                </thead>
                <tbody>
                    {posts.map((pos)=>{
                        return <tr>
                            <td>{pos.userId}</td>
                            <td>{pos.id}</td>
                            <td>{pos.title}</td>
                            <td>{pos.body}</td>
                        </tr>
                    })}
                </tbody>
           </table>
        </div>
    )
}
export default Children3