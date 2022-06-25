import React from 'react'

const Cartstable = ({cartusers}) => {
  return (
    <div>
       <table border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>userId</th>
                <th>date</th>
                <th>__v</th>
            </tr>
        </thead>
        <tbody>
            {cartusers.map((user,i)=>{
                return(
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.userId}</td>
                        <td>{user.date}</td>
                        <td>{user.__v}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Cartstable

