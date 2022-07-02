import React,{Component} from 'react'

export const HOCComponents4 = (OriginalComponent) => {
    
    class HOCComponents4 extends Component {
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
    
  return HOCComponents4
}
