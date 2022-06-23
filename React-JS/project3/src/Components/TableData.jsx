import React from "react"
const TableData = ({Saikiran}) =>{
    return(
        <table border="1">
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            {Saikiran.map((sai) => {
                return <tr>

                    <td>{sai.userId}</td>
                    <td>{sai.id}</td>
                    <td>{sai.title}</td>
                    <td>{sai.body}</td>
                </tr>
            })}
        </tbody>
    </table>
    )
}
export default TableData