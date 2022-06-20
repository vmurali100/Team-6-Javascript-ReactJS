import React from "react"
const CartsTable=({cartsuser})=>{
    return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
             {cartsuser.map((user)=>{
                return <tr>
                    <td>{user.id}</td>
                    <td>{user.userId}</td>
                    <td>{user.date}</td>
                </tr>
             })}
                </tbody>
            </table>
        </div>
    )
}
export default CartsTable