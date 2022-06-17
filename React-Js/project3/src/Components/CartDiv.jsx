import React from "react"
const CartDiv =({filltexUsers})=>{
    return (
        <div>
            {filltexUsers.map((user)=>{
                return <div className="userInfo">
                    <p>{user.userId}</p>
                    <p>{user.id}</p>
                    <p>{user.title}</p>
                    <p>{user.body}</p>
                </div>
            })}
        </div>
    )
}
export default CartDiv