import React, { Component } from 'react'

export default class Counter4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementfun=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.incrementfun)}
      </div>
    )
  }
}
