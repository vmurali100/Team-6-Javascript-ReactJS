import React,{Component} from 'react'

 const HOCcomponent3 = (Originalcomponent3) => {
    
    class HOCcomponent3 extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          handleIncriment3=()=>{
              this.setState({count:this.state.count+1})
          }
      render() {
        return (
         
            <Originalcomponent3 count={this.state.count} handleIncriment3={this.handleIncriment3}/>
          
        )
      }
    }
    
  return (
    HOCcomponent3
  )
}
export default HOCcomponent3
