import Reac,{useState} from 'react'
import { Filltextchild2 } from './Filltextchild2'

export const Fillltext2 = () => {
    const [filltextinfo, setfilltextinfo] = useState([]);
    const getDatafromchild=(filltext1)=>{
        setfilltextinfo(filltext1)
    }
  return (
    <div>
        <Filltextchild2 getData={getDatafromchild}/>

        {filltextinfo.length>0 &&  <table border={1}>
            <thead>
                <tr>
                  
                    <th>id</th>
                    <th>email</th>
                    <th>username</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {filltextinfo.map((user,i)=>{
                    return <tr key={i}>
                      
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                })}
            </tbody>
        </table>}
    </div>
  )
}
