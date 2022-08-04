import { useEffect,useState } from "react"
import axios from 'axios'

export const Products = () => {
    const [productDetails, setproductDetails] = useState([])
    const getallproducts=()=>{
        axios.get("https://api.covid19india.org/data.json").then((response)=>{
            console.log(response.data)
            setproductDetails(response.data)
        })
    }
    const createproducts=()=>{}
    const editproducts=()=>{}
    const deleteproduct=()=>{}
    const updateproduct=()=>{}
    const clearform=()=>{}

    useEffect(()=>{
        getallproducts()
    },[])
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
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
                    {productDetails.map((product,i)=> <tr key={i}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td><img src={product.image} alt="" style={{width:"100px",height:"100px"}}/></td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
