import React,{Component} from 'react'

export const HOCComponents = (OriginalComponent) => {
    
    class HOCComponents extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
             
          }
          HandleIncrements=()=>{
              this.setState({count:this.state.count+1})
          }
        render() {
            return (
                 <OriginalComponent count={this.state.count} HandleIncrements={this.HandleIncrements}/>
            )
        }
    }
    return  HOCComponents
    
}
