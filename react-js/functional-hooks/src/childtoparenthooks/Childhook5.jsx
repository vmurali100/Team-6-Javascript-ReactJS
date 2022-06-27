import axios from 'axios';
import React from 'react';
import {useEffect, useState } from 'react';

const Childhook5 = ({sendphot}) => {
    const [phot,setPhot]=useState([])
    const sendtoparent5=()=>{
        sendphot(phot)
    }
    useEffect(() => {
       const url="http://localhost:3000/photos"
       axios.get(url).then((response)=>{setPhot(response.data)})
    }, [])
    return <div>
        <button onClick={sendtoparent5}>send to parent5</button>
    </div>;
}



export default Childhook5;