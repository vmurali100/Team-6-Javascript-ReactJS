import axios from 'axios';
import React,{useEffect,useState} from 'react';

const Childhook2 = ({sendcom}) => {
     const [comment, setComment] = useState([])
     const sendtoparent=()=>{
        sendcom(comment)
     }
     useEffect(() => {
         const url="http://localhost:3000/comments"
         axios.get(url).then((response)=>{setComment(response.data)})
        
     }, [])
    return <div>
        <div>
            <button onClick={sendtoparent}>send to parent2</button>
        </div>
    </div>;
}



export default Childhook2;