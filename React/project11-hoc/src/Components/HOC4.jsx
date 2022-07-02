import React,{Component} from 'react'

const HOC4 = (Originalcomp4) => {
    class HOC4 extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        handleIncrement=()=>{
        this.setState({count:this.state.count+1})
        }
      render() {
        return (
          <Originalcomp4 handleIncrement={this.handleIncrement} count={this.state.count}/>
        )
      }
    }
    
  return (
    HOC4
  )
}

export default HOC4