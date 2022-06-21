import React from "react"
import Posts from "./Posts"
const Posttable =({Posts})=>{
    return(
        <div>
          <table border="2">
            <thead>
                <tr>
                    <th>Userid</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    
                </tr>
            </thead>
            <tbody>
                {Posts.map((pos)=>{
                    return <tr>
                        <td>{pos.userid}</td>
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
export default Posttable