import React from 'react';
import { Component } from 'react';

class Newclickcounter extends Component {


    render() {
        return (
        <div>
            <p>Newclickcounter</p>
            <h1 onClick={this.props.incrementcount}>clicked {this.props.count} many times</h1>
        </div>
        )
    }
}



export default Newclickcounter;