import { useState } from "react"
import { ProductChild } from "./ProductChild"

export const ProductsParent = ()=>{
    const[productinfo, getProductinfo]=useState([])
    const reciveFromChild=(productDetails)=>{
        getProductinfo(productDetails)
    }

    return(
        <div>
            <ProductChild getProduct={reciveFromChild}/>
            <p>Data Form Products Child</p>
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