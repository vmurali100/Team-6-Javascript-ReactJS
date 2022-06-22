import React, { Component } from 'react'

export default class Comp2 extends Component {
    render() {
        return (
            <div>
                <p>Component 2</p>
                <p>{this.props.Message}</p>
                <p>{this.props.person.fname} {this.props.person.lname}</p>
                <ul>
                     {this.props.Users.map((user,i)=>{
                        return <li key={i}>{user.fname}-{user.lname}</li>

                     })}
                </ul>
            </div>
        )
    }
}
