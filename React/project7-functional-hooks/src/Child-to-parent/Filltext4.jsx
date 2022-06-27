import React,{useState} from 'react'
import { Filltextchild4 } from './Filltextchild4'

export const Filltext4 = () => {
    const [filltextinfo, setfilltextinfo] = useState([])
    const getdatafromchild=(filltext4)=>{
        setfilltextinfo(filltext4)
    }
  return (
    <div>
        <Filltextchild4 getdata={getdatafromchild}/>
        {filltextinfo.length>0 && <table border={1}>
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                </tr>
            </thead>
            <tbody>
                {filltextinfo.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                    </tr>
                })}
            </tbody>
        </table>}
    </div>
  )
}
