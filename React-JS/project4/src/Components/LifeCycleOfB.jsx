import React, { Component } from 'react'

export default class LifeCycleOfB extends Component {
    constructor(props) {
        console.log("Constructor Triggered in LifeCycleB")
      super(props)
    
      this.state = {
      }
    }
  render() {
    console.log("render Triggered in LifeCycleB")
    return (
      <div>
        <p>LifeCycleOfB</p>
        <p>{this.props.msg}</p>
        <p>{this.props.Person.fname}{this.props.Person.lname}</p>
        <ul>
                     {this.props.Users.map((user,i)=>{
                        return <div className="userInfo" key={i}>
                            <p>{user.id}</p>
                            <p>{user.email}</p>
                            <p>{user.username}</p>
                            <p>{user.password}</p>
                        </div>

                     })}
                </ul>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Triggered in LifeCycleB")
  }
  shouldComponentUpdate(){
    console.log("ShouldComponentsUpdate LifeCycleB Triggered")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate LifeCycleB Triggered")
  }
}
