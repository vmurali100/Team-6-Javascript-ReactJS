import React from 'react'

const CartsAsync = () => {
    const AllCartsUsers = async ()=>{
         var AllCarts = await fetch ("https://fakestoreapi.com/carts")
         var data = await AllCarts.json()

         console.log(data)
    }
  return (
    <div>
        <button onClick={AllCartsUsers}>get All Carts</button>
    </div>
  )
}

export default CartsAsync