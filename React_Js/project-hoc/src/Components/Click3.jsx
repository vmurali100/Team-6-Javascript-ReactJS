import React, { Component } from 'react'
import Hoccom3 from './Hoccom3'

 class Click3 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Click3</p>
        <button onClick={this.props.increment3}>click increment3</button>
        <h2>count:{this.props.count}</h2>
      </div>
    )
  }
}
export default Hoccom3(Click3)
