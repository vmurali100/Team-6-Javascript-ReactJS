import axios from 'axios'
import React from 'react'
import {useState, useEffect } from 'react'


export const Products1 = () => {
     
      const [ProductsDetails, setProductsDetails] = useState([])
     
     const getAllProducts=()=>{
        axios.get("http://localhost:3000/ProductsAsi").then((response) => {
            console.log(response.data)
            setProductsDetails(response.data)
            
          })
     }
    const createProduct=()=>{}
     const editProduct=()=>{}
     const deleteProduct=()=>{}
     const updateProduct=()=>{}
     const clearProduct=()=>{}

     useEffect(()=>{
        getAllProducts()
     },[])
    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >Title</th>
                        <th >Category</th>
                        <th >Price</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                 {ProductsDetails.map((product,i)=> <tr key={i}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td><img src={product.image} alt="" style={{width:"100px" , height:"100px"}}/></td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                 </tr>)}
                </tbody>
            </table>
        </div>
    )
}
