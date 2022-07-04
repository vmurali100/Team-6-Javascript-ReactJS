import React, { Component } from 'react'

export default class Counter4 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      increment=()=>{
          this.setState({count:this.state.count+1})
      }
      decrement=()=>{
          this.setState({count:this.state.count-1})
  
      }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.render(this.state.count,this.increment,this.decrement)}
      </div>
    )
  }
}
