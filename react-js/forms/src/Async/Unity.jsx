import React from 'react'
const Unity=()=>{
    const getproducts=async()=>{
        var products=await fetch("http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true")
        var data = await products.json()
        console.log(data)
    }
    return(
        <div>
            <button onClick={getproducts}>get data</button>
        </div>
    )
}
export default Unity