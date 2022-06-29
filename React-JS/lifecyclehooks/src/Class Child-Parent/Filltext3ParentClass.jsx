import React, { Component } from 'react'
import Filltext3ChildClass from './Filltext3ChildClass'

export default class Filltext3ParentClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Filltext:[]
      }
    }
    recieveFilltext=(Filltext)=>{
        this.setState({Filltext})
    }
  render() {
    const {recieveFilltext}=this
    const {Filltext} = this.state

    return (
      <div>
        <Filltext3ChildClass recieveFilltext={recieveFilltext}/>

        <table border={1}>
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                   
                </tr>
            </thead>
            <tbody>
                {Filltext.map((user,i)=>{
                    return(
                        <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                           
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
