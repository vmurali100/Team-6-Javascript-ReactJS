import React, { Component } from 'react'

export default class Counter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increase=()=>{
        this.setState({count:this.state.count+1})
    }
    decrease=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.increase,this.decrease)}
      </div>
    )
  }
}
