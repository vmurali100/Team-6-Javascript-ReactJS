import React, { Component } from 'react'
import Hoccomp3 from './Hoccomp3'
export class Click3 extends Component{
    render(){
        return(
            <div>
                <p>clic3</p>
                <button onClick={this.props.handleincrease}>click</button>
                <p>the click count is :{this.props.count}</p>
            </div>
        )
    }
}
export default Hoccomp3(Click3)