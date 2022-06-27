import React from 'react';
import {useEffect, useState } from 'react';
import axios from 'axios';

const Childhook4 = ({sendcart}) => {
    const [cart,setCart]=useState([])
    const sendtioprent4=()=>{
        sendcart(cart)
    }
    useEffect(() => {
      const url="http://localhost:3000/cart"
      axios.get(url).then((response)=>{setCart(response.data)})
    }, [])
    return <div>
        <button onClick={sendtioprent4}>send to parent4</button>
    </div>;
}



export default Childhook4;