import React, { Component } from 'react'

export const DHOCComponent = (Orinalcomponent) => {
class DHOCComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      console.log(this.props)
    }
    handleincrement=()=>{
        this.setState({count:this.state.count+1})
    }
      render() {
        return (
       <Orinalcomponent count={this.state.count} handleincrement={this.handleincrement}/>
        )
      }
    }
   
  return DHOCComponent
}

