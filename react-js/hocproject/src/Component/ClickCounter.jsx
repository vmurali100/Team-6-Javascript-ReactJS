import React from 'react'
import { Component } from 'react';
import HOCcomponent from './HOCcomponent';
 class ClickCounter extends Component {
     
    render(){
        console.log(this.props)
        return(
            <div>
                <p>ClickCounter</p>
                <button onClick={this.props.handleIncrement}>click to increase count</button>

                <h2>the count is :{this.props.count}</h2>
            </div>
        )
    }
}
export default HOCcomponent(ClickCounter)