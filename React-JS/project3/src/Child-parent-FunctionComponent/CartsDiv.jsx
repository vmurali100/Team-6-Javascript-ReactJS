import React from "react"
const CartsDiv=({cartsuser})=>{
    return(
        <div>
            {cartsuser.map((user)=>{
                    return(
                        <div className="cartsinfo">
                        <p>{user.id}</p>
                        <p>{user.userId}</p>
                        <p>{user.date}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default CartsDiv