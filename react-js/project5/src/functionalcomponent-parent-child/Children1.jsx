import React from "react"
const Children1=({comments})=>{

    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>postid</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((com)=>{
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
export default Children1