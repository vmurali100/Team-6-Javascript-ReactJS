import React, { useEffect,useState } from 'react'
import { Parent2 } from './Parent2'
import { Userprovider } from './Usercontext'
import axios from 'axios'

export const App2 = () => {
    const [alldetails, setalldetails] = useState([])
    useEffect(()=>{
        var url=" http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
       axios.get(url).then((response)=>{
        console.log(response.data)
        setalldetails(response.data)
       }) 
    },[])
    return (
        <div>
            <Userprovider value={alldetails}>
                <Parent2 />
            </Userprovider>

        </div>
    )
}
