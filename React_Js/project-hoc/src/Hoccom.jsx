import React,{Component} from 'react'

const Hoccom = (Originalcomponent) => {
    
   class Hoccom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
      render() {
        return (
            <Originalcomponent count={this.state.count} increment={this.increment}/>
        )
      }
    }
    
  return (
    Hoccom
  )
}

export default Hoccom
