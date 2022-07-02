import React, { Component } from 'react'
import Hoccomponent from './Hoccomponent'

 class Clickcounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // handlecount=()=>{
    //     this.setState({count:this.state.count+1})
    // }
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Clickcounter</p>
        <button onClick={this.props.handlehoverincrement}>click to increase count value</button>
        <h2>The count is : {this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccomponent(Clickcounter)
