import axios from 'axios';
import React from 'react';
import {useEffect, useState } from 'react';

const Childhook3 = ({sendtod}) => {
    const [todos,setTodos]=useState([])
    const sendtoparent=()=>{
        sendtod(todos)
    }
    useEffect(() => {
        const url="http://localhost:3000/todos"
        axios.get(url).then((response)=>{setTodos(response.data)})
    }, [])
    return <div>
        <button onClick={sendtoparent}>send to parent</button>
    </div>;
}


export default Childhook3;