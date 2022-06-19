import { useState } from "react"

export const FilltextChild3 =({filltextDetails})=>{
    const[]=useState()
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
                    {filltextDetails.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                           
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}