import { useState } from "react"
import { Productchild } from "./Productchild"

export const Product = () => {
    const [productinfo, setproductinfo] = useState([])
    const receiveproductfromchild = (productdetails) => {
        setproductinfo(productdetails)
    }
    return (
        <div>
            <Productchild getdata={receiveproductfromchild} />
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
                    {productinfo.map((user,i) => {
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.price}</td>
                            <td>{user.description}</td>
                            <td>{user.category}</td>
                            <td>{user.image}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}