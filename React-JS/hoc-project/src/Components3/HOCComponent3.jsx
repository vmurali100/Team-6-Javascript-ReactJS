import React,{Component} from 'react'

export const HOCComponent3 = (OriginalComponent) => {

class HOCComponent3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }

   
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
      render() {
        return (
            <OriginalComponent count={this.state.count} handleIncrement={this.handleIncrement}/>
        )
      }
    }
    
  return HOCComponent3
  
}
