import React from 'react';

const Firsttab = ({allnames}) => {
    return <div>
        <table border="1">
            <thead>
                <tr>
                    <th>Fname</th>
                    <th>Lname</th>
                    <th>Id</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {allnames.map((nam,i)=>{
                    return <tr key={i}>
                        <td>{nam.fname}</td>
                        <td>{nam.lname}</td>
                        <td>{nam.id}</td>
                        <td>{nam.email}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>;
}



export default Firsttab;