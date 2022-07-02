import React, {Component} from 'react'

const Hoccom3 = (Originalcomponent) => {
    
    
     class Hoccom3 extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        increment3 =()=>{
            this.setState({count:this.state.count+1})
        }
      render() {
        return (
          <Originalcomponent count={this.state.count} increment3={this.increment3}/>
        )
      }
    }
    
  return (
    Hoccom3
  )
}

export default Hoccom3
