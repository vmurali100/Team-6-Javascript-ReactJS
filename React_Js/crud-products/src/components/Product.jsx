import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const Product = () => {
    const [productsDetails, setproductsDetails] = useState([])
    const [productInfo, setproductInfo] = useState({
        category: "",
        description: "",
        id: "",
        image: "",
        price: "",
        title: ""
    })
    const [isEdit, setisEdit] = useState(false)
    const clearForm = () => {
        setproductInfo({
            category: "",
        description: "",
        id: "",
        image: "",
        price: "",
        title: ""
        })
     }
    const createProduct = () => { 
        axios.post("http://localhost:3000/products",productInfo).then(()=>{
            getallproducts()
            clearForm()
        })
    }
    const editproducts = (user) => {
        setisEdit(true)
        setproductInfo(user)
     }
    
    const updateProduct = () => { 
        axios.put("http://localhost:3000/products/"+productInfo.id,productInfo).then((response)=>{
            getallproducts()
            setisEdit(false)
            clearForm()
        })
    }

    const handleChange=(event)=>{
        const newProduct={...productInfo};
        var inputName=event.target.name
        newProduct[inputName]=event.target.value
        setproductInfo(newProduct) 
    }
    const getallproducts = () => {
        axios.get("http://localhost:3000/products").then((response) => {
            console.log(response.data)
            setproductsDetails(response.data)
        })
    }
    const deleteproducts = (product) => {
        console.log(product)
        axios.delete("http://localhost:3000/products/" + product.id).then((response) => {
            getallproducts()
        })
    }
    useEffect(() => {
        getallproducts()
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className='col'></div>
                <div className='col'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" name='title' value={productInfo.title} onChange={(event) => { handleChange(event) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={productInfo.price} onChange={(event) => { handleChange(event) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" name='description' value={productInfo.description} onChange={(event) => { handleChange(event) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input type="text" className="form-control" name='category' value={productInfo.category} onChange={(event) => { handleChange(event) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input type="text" className="form-control" name='image' value={productInfo.image} onChange={(event) => { handleChange(event) }} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" name='id' value={productInfo.id} hidden onChange={(event) => { handleChange(event) }} />
                        </div>
                        <button type="button" onClick={isEdit ? updateProduct : createProduct} className="btn btn-primary">{isEdit ? "update" : "submit"}</button>
                    </form>
                </div>
                <div className='col'></div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {productsDetails.map((product, i) => <tr key={i}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td><img src={product.image} alt="" style={{ width: "100px", height: "100px" }} /></td>
                        <td><button className="btn btn-warning" onClick={()=>{editproducts(product)}}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() => { deleteproducts(product) }}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Product
