import React from "react"
const ChinnodaUsertable =({Chinnodauser})=>{
    return(
        <div>
            <table border="1">
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lnmae</th>
                </tr>
            </thead>
            <tbody>
                {Chinnodauser.map((user,i)=>{
                    return (
                        <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>

                        </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    )
}

export default ChinnodaUsertable