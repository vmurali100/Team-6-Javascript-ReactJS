import React from "react";
const Faketab=({allfake})=>{
   return(
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>email</th>
                    <th>username</th>
                    <th>password</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
                {allfake.map((fak,i)=>{
                    return <tr key={i}>
                        <td>{fak.email}</td>
                        <td>{fak.username}</td>
                        <td>{fak.password}</td>
                        <td>{fak.phone}</td>
                    </tr>
                })}
            </tbody>

        </table>
    </div>
   )
}
export default Faketab