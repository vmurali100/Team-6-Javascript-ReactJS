import React, { Component } from 'react'

export default class Counter3 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      IncrementCount = ()=>{
          this.setState({count:this.state.count + 1})
      }
      DecrementCount = ()=>{
          this.setState({count:this.state.count - 1})
      }
  render() {
    return (
      <div>
        {this.props.Dheena(this.state.count,this.IncrementCount,this.DecrementCount)}
      </div>
    )
  }
}
