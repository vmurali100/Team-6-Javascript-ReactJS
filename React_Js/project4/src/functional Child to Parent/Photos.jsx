import { useState } from "react"
import { Photoschild } from "./Photoschild"

export const Photos = () => {
    const [photoinfo, setphotoinfo] = useState([])
    const receivephotofromchild = (photodetails) => {
        setphotoinfo(photodetails)
    }
    return (
        <div>
            <Photoschild getdata={receivephotofromchild} />
            <table border={1}>
                <thead>
                    <tr>
                        <th>albumId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {photoinfo.map((user,i) => {
                        return <tr>
                            <td>{user.albumId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.url}</td>
                            <td>{user.thumbnailUrl}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}