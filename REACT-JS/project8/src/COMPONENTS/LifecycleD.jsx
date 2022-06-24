import React, { Component } from 'react'


export default class LifecycleD extends Component {
  constructor(props) {
    console.log("componentDidMount trigged in LifecycleD")
    super(props)

    this.state = {
      
    }
  }
  // will trigger both mounting face and update face
  render() {
    console.log("render triggered in LifecycleD")
    return (
      <div>
        <p>LifecycleD</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
  // will triggered in mounting face
  componentDidMount() {
    console.log("componentDidMount triggered in LifecycleD")
  }
  // wi  triggered in update face
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate LifecycleD triggered")
    return true
  }
  // will triggered in update faces
  componentDidUpdate(){
    console.log("componentDidUpdate LifecycleD triggered")
  }

}
