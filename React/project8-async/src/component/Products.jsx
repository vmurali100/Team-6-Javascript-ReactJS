import React from 'react'

export const Products = () => {
    const getallproducts = async () => { 
        var allproducts= await fetch("https://fakestoreapi.com/products")
        var data= await allproducts.json()
        console.log(data)
    }
    return (
        <div>
            <button onClick={getallproducts}>get all products</button>
        </div>
    )
}
