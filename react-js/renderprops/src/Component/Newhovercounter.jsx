import React from 'react';
import { Component } from 'react';

class Newhovercounter extends Component {


    render() {
        return (<div>
            <p>Newhovercounter</p>
            <h2 onMouseOver={this.props.incrementcount}>hovered {this.props.count} times</h2>
        </div>
        )
    }
}



export default Newhovercounter;