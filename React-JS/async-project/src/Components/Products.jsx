import React from 'react'

const Products = () => {
  const getAllProducts = async ()=>{

    var productsinfo = await fetch ("https://fakestoreapi.com/users");
    var data = await productsinfo.json();
    console.log(data)
   
  }
  return (
    <div>
      <button onClick={getAllProducts}>Get All Products</button>
    </div>
  )
}

export default Products