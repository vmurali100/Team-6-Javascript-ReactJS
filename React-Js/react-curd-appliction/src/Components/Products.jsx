import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Products = () => {
    const [productsDetails, setproductsDetails] = useState([])
    const [productInfo, setproductInfo] = useState({
        id: "",
        title: "",
        category: "",
        price: "",
        description: "",
        image: ""
    })
    const [isEdit, setisEdit] = useState(false)

    const getAllProducts = () => {
        axios.get("http://localhost:3000/products").then((respons) => {
            console.log(respons.data)
            setproductsDetails(respons.data)
        })
    };
    const clearForm = () => {
        setproductInfo = ({
            id: "",
            title: "",
            category: "",
            price: "",
            description: "",
            image: ""
        })
    };
    const createProducts = () => {
        axios.post("http://localhost:3000/products ", productInfo).then((respons) => {
            getAllProducts();
            clearForm();
        })
    };

    const editProducts = (product) => {
        setproductInfo(product)
        setisEdit(true)
    };
    const deleteProducts = (product) => {
        console.log(product)
        axios.delete("http://localhost:3000/products/" + product.id).then((respons) => {
            getAllProducts()
        })
    };

    const updateProducts = () => {
        axios.put("http://localhost:3000/products/" + productInfo.id, productInfo).then((respons) => {
            getAllProducts()
            setisEdit(false);
            clearForm();
        })
    };
    const handlechange = (e) => {
        let newProduct = { ...productInfo }
        let inputName = e.target.name;
        newProduct[inputName] = e.target.value;
        setproductInfo(newProduct);
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                            <input type="text" className="form-control" name="title" value={productInfo.title} onChange={(e) => { handlechange(e) }} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                            <input type="text" className="form-control" name="category" value={productInfo.category} onChange={(e) => { handlechange(e) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                            <input type="text" className="form-control" name="price" value={productInfo.price} onChange={(e) => { handlechange(e) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                            <input type="text" className="form-control" name="description" value={productInfo.description} onChange={(e) => { handlechange(e) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
                            <input type="text" className="form-control" name="image" value={productInfo.image} onChange={(e) => { handlechange(e) }} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" hidden value={productInfo.id} onChange={(e) => { handlechange(e) }} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={isEdit ? updateProducts : createProducts}>
                            {isEdit ? 'Update Products' : 'Add Product'}
                        </button>
                    </form>
                </div>
                <div className="col"></div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {productsDetails.map((product, i) => <tr key={i}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td><img src={product.image} alt="" style={{ window: "100px", height: "100px" }} /></td>
                        <td><button className="btn btn-warning" onClick={() => { editProducts(product) }} >Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() => { deleteProducts(product) }} >Delete</button></td>
                    </tr>)}
                </tbody>
            </table>

        </div>
    )
}
