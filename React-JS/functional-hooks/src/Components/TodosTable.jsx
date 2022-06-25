import React from 'react'

const Todostable =({TodosDetails})=>{
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                       <th>userId</th>
                       <th>id</th>
                       <th>title</th>
                       <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {TodosDetails.map((user,i)=>{
                        return (
                            <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.completed}</td>


                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Todostable