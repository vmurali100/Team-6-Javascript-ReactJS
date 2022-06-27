import React, { Component } from 'react'
import Cartchild from './Cartchild'


export default class Cartparent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cart:[]
      }
    }
    recivecart=(cart)=>{
        this.setState({cart})
    }
  render() {
    const {recivecart}=this
    const {cart}=this.state
    return (
      <div>
        <Cartchild recivecart={recivecart}/>
        <table border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>userId</th>
                <th>date</th>
            </tr>
        </thead>
        <body>
            {cart.map((user,i)=>{
                return <tr key={i}>
                    <td>{user.id}</td>
                    <td>{user.userId}</td>
                    <td>{user.date}</td>
                </tr>
            })}
        </body>
        </table>
      </div>
    )
  }
}
