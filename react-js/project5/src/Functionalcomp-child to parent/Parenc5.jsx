import { useState } from "react"
import Child5 from "./Child5"

const Parenc5=()=>{
    const[albuminfo,setalbuminfo]=useState([])
    const receivealbumfromchild=(albumsdetails)=>{
        setalbuminfo(albumsdetails)
    }
    return(
        <div>
            <Child5 sendalbum={receivealbumfromchild}/>
            {
                <table border="1">
                    <thead>
                        <tr>
                            <th>userid</th>
                            <th>id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {albuminfo.map((al)=>{
                            return <tr>
                                <td>{al.userId}</td>
                                <td>{al.id}</td>
                                <td>{al.title}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}
export default Parenc5