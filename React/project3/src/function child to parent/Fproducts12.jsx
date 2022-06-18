import { useState } from "react"
import { FproductsChild12 } from "./FproductsChild12"

export const Fproducts12=()=>{
    const[productinfo,getproductinfo]=useState([])
    const recieveFromChild=(productdetails)=>{
        getproductinfo(productdetails)
    }
    return(
        <div>
            <FproductsChild12 getProducts={recieveFromChild}/>
            <p>data from products child</p>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>description</th>
                        <th>image</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {productinfo.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.price}</td>
                            <td>{user.description}</td>
                            <td>{user.image}</td>
                            <td>{user.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}