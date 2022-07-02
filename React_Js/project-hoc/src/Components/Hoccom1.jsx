import React,{Component} from 'react'

const Hoccom1 = (Originalcomponent) => {
   
    
 class Hoccom1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment1=()=>{
        this.setState({count:this.state.count+1})
    }
      render() {
        return (
         <Originalcomponent count={this.state.count} increment1={this.increment1}/>
        )
      }
    }
    
  return (
    Hoccom1
  )
}

export default Hoccom1
