import React from 'react';

const Query = () => {
    const getquery=async()=>{
        var getinfo=await fetch("https://fakestoreapi.com/products")
        var data=await getinfo.json()
        console.log(data)
    }
    return <div>
        <button onClick={getquery}>get query</button>
    </div>;
}


export default Query;