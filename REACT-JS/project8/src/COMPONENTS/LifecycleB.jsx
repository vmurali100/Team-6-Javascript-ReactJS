import React, { Component } from 'react'

export default class LifecycleB extends Component {
  constructor(props) {
    console.log("componentDidMount trigged in LifecycleB")
    super(props)

    this.state = {
      
    }
  }
  // will trigger both mounting face and update face
  render() {
    console.log("render triggered in LifecycleB")
    return (
      <div>
        <p>LifecycleB</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  // will triggered in mounting face
  componentDidMount() {
    console.log("componentDidMount triggered in LifecycleB")
  }
  // wi  triggered in update face
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate LifecycleB triggered")
    return true
  }
  // will triggered in update faces
  componentDidUpdate(){
    console.log("componentDidUpdate LifecycleB triggered")
  }

}
