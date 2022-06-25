import React from 'react'

const Commenttable=({allcoment})=>{
    return(
        <div>
           <table border="1">
            <thead>
                <tr>
                    <th>postid</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {allcoment.map((com)=>{
                    return <tr>
                        <td>{com.postId}</td>
                        <td>{com.id}</td>
                        <td>{com.name}</td>
                        <td>{com.email}</td>
                        <td>{com.body}</td>
                    </tr>
                })}
            </tbody>

           </table>
        </div>
    )
}
export default Commenttable