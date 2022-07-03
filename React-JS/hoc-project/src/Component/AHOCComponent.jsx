import React,{Component} from 'react'

export const AHOCComponent = (Originalcom) => {
 class AHOCComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      console.log(this.props)
    }
    handleIncre=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
      return (
        <Originalcom count={this.state.count} handleIncre={this.handleIncre}/>
      )
    }
  }
  return AHOCComponent
}