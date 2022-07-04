import React, { Component } from 'react'

export default class Counter5 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
      incrementCount = () => {
          this.setState({count:this.state.count+1})
      }
      decrementCount = () => {
        this.setState({count: this.state.count -1})
      }
  render() {
    return (
      <div>{this.props.render(this.state.count,this.incrementCount,this.decrementCount)}</div>
    )
  }
}
