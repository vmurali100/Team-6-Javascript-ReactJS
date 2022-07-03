import React,{Component} from "react"

export const HOCComponent1 = (Originalcomponent) => {
    class HOCComponent1 extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
          console.log(this.props)
        }
        handleIncrement=()=>{
           this.setState({count:this.state.count+1})
        }
      render() {
        return (
        
             <Originalcomponent count= {this.state.count} handleIncrement={this.handleIncrement}/>
        
        )
      }
    }
    
 return HOCComponent1
}