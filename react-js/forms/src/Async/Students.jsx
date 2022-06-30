import React from 'react'
const Students = ()=>{
    const getallproducts=async ()=>{
       var productsinfo=await fetch("https://jsonplaceholder.typicode.com/posts") ;
       var data = await productsinfo.json()
       console.log(data)
    }
    return(
        <div>
            <button onClick={getallproducts}>get all products</button>
        </div>
    )
}
export default Students