import React from 'react'

const Albumstable=({AlbumDeatils})=>{
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {AlbumDeatils.map((sai,i)=>{
                        return <tr key={i}>
                            <td>{sai.userId}</td> 
                            <td>{sai.id}</td>                            
                            <td>{sai.title}</td> 
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Albumstable