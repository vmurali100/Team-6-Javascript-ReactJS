import React from 'react'
import { Component } from 'react';
import Hoccomp1 from './Hoccomp1';
import Hovercount1 from './Hovercount1';

class Clickcount1 extends Component{
    render(){
        return(
            <div>
                <p>Clickcount1</p>
                <button onClick={this.props.handleincrement}>click to increase count</button>
                <h2>the count is : {this.props.count}</h2>
            </div>
        )
    }

}
export default Hoccomp1(Clickcount1)