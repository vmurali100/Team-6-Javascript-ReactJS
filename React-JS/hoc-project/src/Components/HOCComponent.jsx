import React, { Component } from 'react'

export const HOCComponent = (OroginalComponent) => {


    class HOCComponent extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               Count:0,
            }

        }
      
          handleIncrement =()=>{
              this.setState({Count:this.state.Count+1})
          }
        render() {
            return (
                <OroginalComponent  Count={this.state.Count} handleIncrement={this.handleIncrement}/>
            )
        }
    }

    return HOCComponent
    
}
