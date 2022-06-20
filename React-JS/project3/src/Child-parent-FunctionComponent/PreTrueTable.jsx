import React from "react"
const PreTrueTable=({truee})=>{
    return(
        <div>
            <table border={1}>
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                </tr>
            </thead>
            <tbody>
       {
         truee.map((user,i)=>{
           return(
            <tr>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
            </tr>
           )
        })
       }
            </tbody>
        </table>
        </div>
    )
}
export default PreTrueTable