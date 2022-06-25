import React from 'react'

const Productstable = ({products}) => {
  return (
    <div>
      <table border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>description</th>
                <th>category</th>
                <th>image</th>
            </tr>
        </thead>
        <tbody>
            {products.map((user,i)=>{
                return(
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.price}</td>
                        <td>{user.description}</td>
                        <td>{user.category}</td>
                        <td>{user.image}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Productstable
