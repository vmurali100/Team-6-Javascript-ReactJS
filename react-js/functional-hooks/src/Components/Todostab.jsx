import React from 'react';

const Todostab = ({alltods}) => {
    return <div>
        <table border="1">
            <thead>
                <tr>
                    <th>Userid</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {alltods.map((tods)=>{
                       return <tr>
                        <td>{tods.userId}</td>
                        <td>{tods.id}</td>
                        <td>{tods.title}</td>
                        <td>{tods.completed}</td>
                       </tr>
                })}
            </tbody>
        </table>
    </div>;
}



export default Todostab;