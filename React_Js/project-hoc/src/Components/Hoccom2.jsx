import React,{Component} from 'react'

const Hoccom2 = (Originalcomponent) => {
    
    
class Hoccom2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment2=()=>{
        this.setState({count:this.state.count+1})
    }
    
      render() {
        return (
         <Originalcomponent count={this.state.count} increment2={this.increment2}/>
        )
      }
    }
    
  return (
   Hoccom2
  )
}

export default Hoccom2
