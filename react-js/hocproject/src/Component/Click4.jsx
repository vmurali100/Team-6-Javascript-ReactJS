import React from 'react'
import { Component } from 'react';
import Hoccomp4 from './Hoccomp4';
export class Click4 extends Component{
    render(){
        return(
            <div>
                <p>click4</p>
                <button onClick={this.props.handleincrement}>click</button>
                <p>the click count is : {this.props.count}</p>
            </div>
        )
    }
}
export default Hoccomp4(Click4)