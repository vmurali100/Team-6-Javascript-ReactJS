import React,{ Component } from 'react'
import HOCcomponent3  from './HOCcomponent3'

 class Hovercount3 extends Component {
   
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Hovercount3</p>
        <h1 onMouseOver={this.props.handleIncriment3}>hover count is:{this.props.count} </h1>
      </div>
    )
  }
}
export default HOCcomponent3(Hovercount3)



