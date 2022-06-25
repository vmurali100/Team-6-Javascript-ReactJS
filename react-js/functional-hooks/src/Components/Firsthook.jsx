import axios from 'axios';
import {useState,useEffect} from 'react';
import Firsttab from './Firsttab';

const Firsthook = () => {
    const [first, setFirst] = useState([])
    useEffect(() => {
        const url="http://localhost:3000/fname"
        axios.get(url).then((response)=>{setFirst(response.data)})
    }, [])
    return <div>
       <Firsttab allnames={first}/>
    </div>;
}



export default Firsthook;