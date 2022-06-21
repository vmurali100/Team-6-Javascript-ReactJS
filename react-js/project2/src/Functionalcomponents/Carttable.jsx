import React from "react";
import Carts from "./Carts";
const Carttable=({Carts})=>{
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Userid</th>
                        <th>Date</th>
                        <th>Products</th>
                        <th>Productid</th>
                        <th>Quantity</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {Carts.map((car)=>{
                        return <tr>
                            <td>{car.id}</td>
                            <td>{car.userid}</td>
                            <td>{car.date}</td>
                            <td>{car.products}</td>
                            <td>{car.productid}</td>
                            <td>{car.quantity}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Carttable