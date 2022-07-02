import React from 'react'
import { Component } from 'react';
import Hoccomp2 from './Hoccomp2';

export class Click2 extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.handleincrese}>the click count </button>
                <h2>the click count is :{this.props.count}</h2>
            </div>
        )
    }
}
export default Hoccomp2(Click2)