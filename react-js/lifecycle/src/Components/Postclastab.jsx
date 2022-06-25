 import React from "react"
 const Postclastab=({allposts})=>{
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>userid</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {allposts.map((ap,i)=>{
                        return <tr key={i}>
                            <td>{ap.userId}</td>
                            <td>{ap.id}</td>
                            <td>{ap.title}</td>
                            <td>{ap.body}</td>
                            
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Postclastab