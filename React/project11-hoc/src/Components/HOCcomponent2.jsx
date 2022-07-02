import React,{Component} from 'react'

export const HOCcomponent2 = (Originalcomponent2) => {
   class HOCcomponent2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      handleIncriment=()=>{
          this.setState({count:this.state.count+1})
      }
      render() {
        return (
         <Originalcomponent2 count={this.state.count} handleIncriment={this.handleIncriment}/>
        )
      }
    }
    
   
  return (
    HOCcomponent2
  )
}
