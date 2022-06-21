import React from "react";
import Carts from "./Carts";
const Cartdiv=({Carts})=>{
    return(
        <div>
            {Carts.map((car)=>{
                return (
                    <div className="cartinfo">
                        <p>{car.id}</p>
                        <p>{car.userid}</p>
                        <p>{car.date}</p>
                        <p>{car.products}</p>
                        <p>{car.productid}</p>
                        <p>{car.quantity}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Cartdiv