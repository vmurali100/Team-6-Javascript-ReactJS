import React, { Component } from 'react'
import Hoccomp4 from './Hoccomp4'
export class Hover4 extends Component{
    render(){
        return(
            <div>
                <p>hover4</p>
               
                 <h1 onMouseOver={this.props.handleincrement}>the hover is :{this.props.count}</h1>
            </div>
        )
    }
   
}
export default Hoccomp4(Hover4)