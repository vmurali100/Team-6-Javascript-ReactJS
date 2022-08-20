import React, { Component } from 'react'

const Hoc = (Originalcomponent) => {
    class Hoc extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
            console.log(this.props)
          }
          handleHover=()=>{
              this.setState({count:this.state.count+1})
          }
      render() {
        return (
         <Originalcomponent count={this.state.count} handleHover={this.handleHover}/>
        )
      }
    }
  return (
    Hoc
  )
}

export default Hoc
