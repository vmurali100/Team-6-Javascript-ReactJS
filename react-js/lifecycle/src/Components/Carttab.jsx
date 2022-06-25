import React from "react"
const Carttab=({allcart})=>{
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userid</th>
                        <th>date</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {allcart.map((ca,i)=>{
                        return <tr key={i}>
                            <td>{ca.id}</td>
                            <td>{ca.userId}</td>
                            <td>{ca.date}</td>
                            <td>{ca.email}</td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    )
}
export default Carttab