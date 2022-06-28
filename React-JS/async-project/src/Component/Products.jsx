import React from 'react'

const Products = () => {
  const getallproducts=async ()=>{
    var producteinfo=await fetch("https://jsonplaceholder.typicode.com/posts")
    var data= await producteinfo.json()
    console.log(data)
  }
  return (
    <div>
      <button onClick={getallproducts}>Get all product</button>
    </div>
  )
}

export default Products
