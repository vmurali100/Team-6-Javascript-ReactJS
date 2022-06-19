import React from "react"
const PrettyTable=({pretty})=>{
    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>username</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {
                    pretty.map((user)=>{
                        return<tr>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
export default PrettyTable