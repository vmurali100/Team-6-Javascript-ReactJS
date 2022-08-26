import React, { Component } from 'react'
import HOC from './HOC'

export  class Click extends Component {
  render() {
   
    return (
      <div>
       
        
        <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>price</th>
            <th>description</th>
            <th>category</th>
            <th>image</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.user.map((userid,i) => {
            return( 
              <tr key={i}>
                <td>{userid.id}</td>
                <td>{userid.price}</td>
                <td>{userid.description}</td>
                <td>{userid.category}</td>
                <td>{userid.image}</td>
                <td>
                 
                </td>
              </tr>
          )
          })}
        </tbody>
      </table>
        
      </div>
    )
  }
}
export default HOC(Click)
