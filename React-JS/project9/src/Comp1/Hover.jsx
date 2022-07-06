import React, { Component } from 'react'
import { HOC } from './HOC'

class Hover extends Component {


    render() {
        return (
            <div>
                <p>Hover</p>
                <h1 onMouseOver={this.props.increase}>hover count is:{this.props.count} many times</h1>
            </div>
        )
    }
}
export default HOC(Hover)
