import React from 'react'
import { Component } from 'react';
import Hoccomp3 from './Hoccomp3';
export class Hover3 extends Component{
    render(){
        return(
            <div>
                <p>hover3</p>
                <h1 onMouseOver={this.props.handleincrease}>the hover count is:{this.props.count}</h1>
            </div>
        )
    }
}
export default Hoccomp3(Hover3)