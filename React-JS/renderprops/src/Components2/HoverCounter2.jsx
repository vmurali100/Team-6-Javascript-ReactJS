import React, { Component } from 'react'

export default class HoverCounter2 extends Component {
   
    render() {
        return (
            <div>
                <p>HoverCounter2</p>
                <button onMouseOver={this.props.IncrementCount}>IncrementHover</button>
                <button onMouseOut={this.props.DecrementCount}>DecrementHoverOut</button>
                <h2>Hovered {this.props.count} times</h2>

                {/* <h2 onMouseOver={this.props.incremenftCount} onMouseOut={this.props.decrementCount}>Hovered {this.props.count} times</h2> */}
            </div>
        )
    }
}
