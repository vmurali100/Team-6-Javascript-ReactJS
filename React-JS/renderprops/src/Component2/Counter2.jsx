import React, { Component } from 'react'

export default class Counter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementcounter=()=>{
        this.setState({count:this.state.count+1})
    }
    reductioncounter=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.incrementcounter,this.reductioncounter)}
      </div>
    )
  }
}
