import React from "react";
const Children4=({filtext})=>{
    return(
        <div>
           <table border="1">
                <thead>
                    <tr>
                        
                        <th>id</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {filtext.map((fil)=>{
                        return <tr>
                            
                            <td>{fil.id}</td>
                            <td>{fil.email}</td>
                            <td>{fil.username}</td>
                            <td>{fil.password}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Children4