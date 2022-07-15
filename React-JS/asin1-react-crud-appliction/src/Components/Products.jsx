import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

export const Products = () => {
  const [productsDetails, setproductsDetails] = useState([])
  const [productInfo, setproductInfo] = useState({
    category: "",
    description: "",
    id: "",
    image: "",
    price: "",
    rating: "",
    title: ""
  })

  const [isEdit, setisEdit] = useState(false)

  const getAllProducts = () => {
    axios.get("http://localhost:3000/ProductsAsi").then((response) => {
      console.log(response.data)
      setproductsDetails(response.data)
    })
  };

  const createProduct = () => {
         axios.post("http://localhost:3000/ProductsAsi/",productInfo).then(()=>{
             getAllProducts()
            //  setproductInfo(product)
             clearForm()
         })
   };
  const editProduct = (product) => { 
    setisEdit(true)
    setproductInfo(product)
  };

  const deleteProduct = (product) => {
    console.log(product)
    axios.delete("http://localhost:3000/ProductsAsi/" + product.id).then(() => {
      getAllProducts()
    })
  };

  const clearForm = () => {
    setproductInfo({
      category: "",
      description: "",
      id: "",
      image: "",
      price: "",
      rating: "",
      title: ""
    })
   }

  const updateProduct = () => { 
    axios.put("http://localhost:3000/ProductsAsi/" + productInfo.id,productInfo).then((response)=>{
      getAllProducts()
      setisEdit(false)
      clearForm()
    })
  };
  
  const handleChange=(e)=>{
    let newProduct = {...productInfo}
    let inputName = e.target.name
    newProduct[inputName] = e.target.value
    setproductInfo(newProduct)
  }

  

  useEffect(() => {
    getAllProducts(

    )
  }, [])

  return (
    <div className='container'>

      <div className="row">
        <div className="col"></div>
        <div className="col">
        <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
          <input type="text" className="form-control" name='title' value={productInfo.title} onChange={(e)=>{handleChange(e)}}/>
            
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
          <input type="text" name='category' className="form-control"  value={productInfo.category} onChange={(e)=>{handleChange(e)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
          <input type="text" name='price' className="form-control" value={productInfo.price} onChange={(e)=>{handleChange(e)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input type="text" name='description' className="form-control" value={productInfo.description} onChange={(e)=>{handleChange(e)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
          <input type="text" name='image' className="form-control" value={productInfo.image} onChange={(e)=>{handleChange(e)}}/>
        </div>
        
        <div className="mb-3">
          
          <input type="text" className="form-control" hidden value={productInfo.id} onChange={(e)=>{handleChange(e)}}/>
        </div>
        
        <button type="button" className="btn btn-primary" onClick={isEdit ? updateProduct : createProduct}> {isEdit  ? "updateProduct" : "AddProduct"}</button>
      </form>
        </div>
        <div className="col"></div>
      </div>
     

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
          {productsDetails.map((product, i) => <tr key={i}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
              <img src={product.image} alt="" style={{ width: "100px", height: "100px" }} />
            </td>
            <td><button type='button' className="btn btn-warning" onClick={()=>{editProduct(product)}}>Edit</button></td>
            <td><button type='button' className="btn btn-danger" onClick={() => { deleteProduct(product)}}>Delete</button></td>
          </tr>
          )}

        </tbody>
      </table>
    </div>
  )
}
