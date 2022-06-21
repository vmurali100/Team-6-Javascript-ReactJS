 import React from "react"
 const Children2=({album})=>{
    return(
        <div>
           <table border="1">
            <thead>
                <tr>
                    <th>userid</th>
                    <th>id</th>
                    <th>title</th>
                </tr>
                </thead>
                <tbody>
                    {album.map((alb)=>{
                        return <tr>
                            <td>{alb.userId}</td>
                            <td>{alb.id}</td>
                            <td>{alb.title}</td>
                        </tr>
                    })}
                </tbody>
           </table>
        </div>
    )
}
export default Children2