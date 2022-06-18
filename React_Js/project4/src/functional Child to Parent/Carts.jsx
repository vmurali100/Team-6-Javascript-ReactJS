import { useState } from "react"
import { Cartschild } from "./Cartschild"


export const Carts = () => {
    const [cartinfo, setcartinfo] = useState([])
    const receivecartfromchild = (cartdetails) => {
        setcartinfo(cartdetails)
    }
    return (
        <div>
            <Cartschild getdata={receivecartfromchild} />
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>date</th>
                        <th>__v</th>
                    </tr>
                </thead>
                <tbody>
                    {cartinfo.map((user,i) => {
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.date}</td>
                            <td>{user.__v}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}