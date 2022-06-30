import React from 'react'
const Rainbow=()=>{
    const getapidata=async()=>{
        var getrain=await fetch("https://fakestoreapi.com/users")
        var data=await getrain.json()
        console.log(data)
    }
    return(
        <div>
            <button onClick={getapidata}>get apidata</button>
        </div>
    )
}
export default Rainbow