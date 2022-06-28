import React from 'react'

const Products = () => {
    const getallproducts=async()=>{
        var products = await fetch("https://fakestoreapi.com/products")
        var data = await products.json();
        console.log(data)
    }
  return (
    <div>
      <button onClick={getallproducts}>get all Products</button>
    </div>
  )
}

export default Products
