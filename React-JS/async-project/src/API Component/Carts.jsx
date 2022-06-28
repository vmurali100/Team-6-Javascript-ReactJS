import React from 'react'

const Carts = () => {
    const getallcarts=async()=>{
        var cartsinfo=await fetch(" https://fakestoreapi.com/carts")
        var cart=await cartsinfo .json()
        console.log(cart)
    }
  return (
    <div>
        <button onClick={getallcarts}>click me</button>
    </div>
  )
}

export default Carts