import React,{Component} from 'react'

export const HOCcomponent1 = (OriginalComponent1) => {

    class HOCcomponent1 extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
           console.log(this.props)
          }
          handleIncriment = () => {
              this.setState({count:this.state.count+1})
          }
        render() {
            return (
                <OriginalComponent1 count={this.state.count} handleIncriment={this.handleIncriment}/>
            )
        }
    }


    return  HOCcomponent1 
    
}
