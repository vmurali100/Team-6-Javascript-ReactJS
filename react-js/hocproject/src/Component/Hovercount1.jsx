import React from 'react'
import { Component } from 'react';
import Hoccomp1 from './Hoccomp1';
export class Hovercount1 extends Component{
    render(){
        return(
            <div>
                <p>hovercount</p>
                <h1 onMouseOver={this.props.handleincrement}>hover count is : {this.props.count}</h1>
            </div>
        )
    }
}
export default Hoccomp1(Hovercount1)