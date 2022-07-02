import React, {Component} from 'react'

export const HOCComponents1 = (OriginalComponent) => {
   
    class HOCComponents1 extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          handleIncrement = () => {
              this.setState({count:this.state.count+1})
          }
      render() {
        return (
          <OriginalComponent count={this.state.count} handleIncrement={this.handleIncrement} />
        )
      }
    }
  return HOCComponents1
}


