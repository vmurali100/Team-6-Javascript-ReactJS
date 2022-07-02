import React, { Component } from 'react';
import HOCcomponent from './HOCcomponent';



export class Hovercount extends Component {


    render() {
       
        return <div>
            <p>hover count</p>
            <h2 onMouseOver={this.props.handleIncrement}>hover count is :{this.props.count}</h2>
        </div>;
    }
}
 
export default HOCcomponent(Hovercount)


