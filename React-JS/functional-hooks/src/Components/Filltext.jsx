import axios from 'axios';
import React from 'react'
import { useEffect ,useState} from 'react'
import FilltextTable from './FilltextTable';

export default function Filltext() {
    const [allUser, setAllUser] = useState([])

    useEffect(()=>{
        const url ="http://www.filltext.com/?rows=10&id=%7Bindex%7D&email=%7Bemail%7D&username=%7Busername%7D&password=%7BrandomString%7C5%7D&pretty=true";
        axios.get(url).then((response)=>{setAllUser(response.data)})
    },[])
  return (
    <div>
       <FilltextTable filltextUsers={allUser}/>
    </div>
  )
}
