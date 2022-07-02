import React from 'react'
import { Component } from 'react';
import Hoccomp2 from './Hoccomp2';

export class Hover2 extends Component{
    render(){
        return(
            <div>
                <p>hover2</p>
                <h2 onMouseOver={this.props.handleincrese}>the count is :{this.props.count}</h2>
            </div>
        )
    }
    
}
export default Hoccomp2(Hover2)