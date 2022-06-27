import React,{useState} from 'react'
import { Filltextchild3 } from './Filltextchild3'

export const Filltext3 = () => {
    const [filltextinfo, setfilltextinfo] = useState([])
    const getdatafromchild=(filltext3)=>{
        setfilltextinfo(filltext3)
    }
  return (
    <div>
        <Filltextchild3 getData={getdatafromchild}/>
        {filltextinfo.length >0 &&         <table border={1}>
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>tel</th>
                    <th>address</th>
                    <th>city</th>
                    <th>state</th>
                    <th>zip</th>
                    <th>id</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {filltextinfo.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.tel}</td>
                        <td>{user.address}</td>
                        <td>{user.city}</td>
                        <td>{user.state}</td>
                        <td>{user.zip}</td>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                    </tr>
                })}
            </tbody>
        </table>}

    </div>
  )
}

