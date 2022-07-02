import React,{Component} from 'react'

const Hoccomponent = (Originalcomponent) => {
   
  class Hoccomponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }

      }
      handlehoverincrement=()=>{
          this.setState({count:this.state.count+1})
      }
      render() {
        return (
         <Originalcomponent count={this.state.count} handlehoverincrement={this.handlehoverincrement}/>
        )
      }
    }
    
    
  return (
    Hoccomponent
  )
}

export default Hoccomponent

