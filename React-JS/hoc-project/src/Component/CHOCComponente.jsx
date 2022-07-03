import React, { Component } from 'react'

export const CHOCComponente = (Origicom) => {
class CHOCComponente extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      console.log(this.props)
    }
    hadleinc=()=>{
        this.setState({count:this.state.count+1})
    }
      render() {
        return (
         <Origicom count={this.state.count} hadleinc={this.hadleinc}/>
        )
      }
    }
    
  return CHOCComponente
  
}

export default CHOCComponente