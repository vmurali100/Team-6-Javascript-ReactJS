import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Products = () => {
    const [productDetails, setproductDetails] = useState([])
    const [productInfo, setproductInfo] = useState({
        category: "",
        description: "",
        id: "",
        image: "",
        price: "",
        title: ""
    })
    const [isEdit, setisEdit] = useState(false)
    const getAllProducts = () => {
        axios.get("http://localhost:3000/products").then((response) => {
            console.log(response.data)
            setproductDetails(response.data)
        })
    }
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
            getAllProducts()
            clearForm()
        })
    }
    const editProduct = (user) => {
        setisEdit(true)
        setproductInfo(user)
     }
    const deleteProduct = (user) => {
        axios.delete("http://localhost:3000/products/" + user.id).then((response) => {

            getAllProducts()
        })
    }
    const updateProduct = () => { 
        axios.put("http://localhost:3000/products/"+productInfo.id,productInfo).then((response)=>{
            getAllProducts()
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
    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className='col'></div>
                <div className='col'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" name='title' value={productInfo.title} onChange={(event)=>{handleChange(event)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={productInfo.price} onChange={(event)=>{handleChange(event)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" name='description'  value={productInfo.description} onChange={(event)=>{handleChange(event)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input type="text" className="form-control" name='category' value={productInfo.category} onChange={(event)=>{handleChange(event)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input type="text" className="form-control" name='image' value={productInfo.image} onChange={(event)=>{handleChange(event)}}/>
                        </div>
                        <div className="mb-3">

                            <input type="text" className="form-control" name='id' value={productInfo.id} hidden  onChange={(event)=>{handleChange(event)}}/>
                        </div>
                        <button type="button" onClick={isEdit ? updateProduct : createProduct} className="btn btn-primary">{isEdit ? "update" :"submit"}</button>
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
                    {productDetails.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.price}</td>
                            <td>{user.description}</td>
                            <td>{user.category}</td>
                            <td><img src={user.image} alt="" style={{ width: "100 px", height: "100px" }} /></td>
                            <td><button className="btn btn-warning" onClick={()=>{editProduct(user)}}>Edit</button></td>
                            <td><button className="btn btn-danger" onClick={() => { deleteProduct(user) }}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Products