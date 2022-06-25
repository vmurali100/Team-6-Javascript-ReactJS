import React from 'react'
const Posttab=({allpost})=>{
    
    return(
        <div>
           <table border="1">
            <thead>
                <tr>
                    <th>userid</th>
                    <th>id</th>
                    <th>title</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {allpost.map((post,i)=>{
                    return <tr key={i}>
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.email}</td>
                        <td>{post.body}</td>
                    </tr>
                })}
            </tbody>
           </table>
        </div>
    )

}
export default Posttab