import React from 'react'
import { Component } from 'react'

export const HOC = (Orginalcomponent) => {
    
 class HOC extends Component                                                                                                                     {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      countincreament=()=>{
       this.setState({count:this.state.count+1})
      }
      render() {
        return (
            <Orginalcomponent count={this.state.count} countincreament={this.countincreament} />
        )
          
        
      }
    }
    
  return HOC
    
  
}
