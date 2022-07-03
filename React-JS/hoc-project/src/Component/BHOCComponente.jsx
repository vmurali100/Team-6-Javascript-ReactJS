import React,{Component} from 'react'

export const BHOCComponente = (Original) => {
    
     class BHOCComponente extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
          console.log(this.props)
        }
        hadleincre=()=>{
            this.setState({count:this.state.count+1})
        }
      render() {
        return (
          <Original count={this.state.count} hadleincre={this.hadleincre}/>
        )
      }
    }
    
  return BHOCComponente
}
