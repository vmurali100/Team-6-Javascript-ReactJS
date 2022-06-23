import { useState } from "react"

export const Child5FilltextUser =({Allusers})=>{
    const []=useState()
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                    </tr>
                </thead>
                <tbody>
                    {Allusers.map((sai,i)=>{
                        return <tr key={i}>
                            <td>{sai.fname}</td>
                            <td>{sai.lname}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}