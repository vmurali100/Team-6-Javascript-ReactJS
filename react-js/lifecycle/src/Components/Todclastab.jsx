import React from 'react';

const Todclastab=({altod})=>{
    
        return <div>
        <table border="1">
            <thead>
                <tr>
                    <th>userid</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                {altod.map((td,i)=>{
                    return <tr key={i}>
                            <td>{td.userId}</td>
                            <td>{td.id}</td>
                            <td>{td.title}</td>
                            <td>{td.completed}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>;
    }
        
    


export default Todclastab;