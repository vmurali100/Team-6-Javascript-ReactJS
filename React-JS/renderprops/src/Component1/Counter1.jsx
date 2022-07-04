import React, { Component } from 'react'

export default class Counter1 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      IncrementCounter=()=>{
          this.setState({count:this.state.count+1})
      }
      ReductionCounter=()=>{
          this.setState({count:this.state.count-1})
      }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.IncrementCounter,this.ReductionCounter)}
      </div>
    )
  }
}
