import { useState } from "react"
import { Productschild } from "./Productschild"

export const Productsparent=()=>{
    const[productinfo,setproductinfo]=useState([])
    const receiveproductfromchild=(productdetails)=>{
        setproductinfo(productdetails)
    }
    return(
        <div>
            <Productschild getdata={receiveproductfromchild}/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>description</th>
                        <th>category</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {productinfo.map((user,i)=>{
                        return
                           
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Productsparent