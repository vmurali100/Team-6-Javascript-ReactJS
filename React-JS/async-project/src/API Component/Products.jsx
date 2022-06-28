import React from 'react'

const Products = () => {
    const getallproducts=async()=>{
        var Productsinfo=await fetch("https://fakestoreapi.com/products")
        var product=await Productsinfo.json()
        console.log(product)
    }
  return (
    <div>
        <button onClick={getallproducts}>click me</button>
    </div>
  )
}

export default Products