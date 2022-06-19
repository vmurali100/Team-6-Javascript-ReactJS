import { useState } from "react"

export const Pproductschild =({product})=>{
    const[]=useState()
    return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>description</th>
                        <th>category</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((user,i)=>{
                        return <tr>
                            <th>{user.id}</th>
                            <th>{user.title}</th>
                            <th>{user.price}</th>
                            <th>{user.description}</th>
                            <th>{user.category}</th>
                            <th>{user.image}</th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}