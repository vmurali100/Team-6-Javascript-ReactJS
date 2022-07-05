import React from 'react';

class Newhover2 extends React.Component {

    render() {
        return <div>
            <p>Newhover2</p>
            <h1 onMouseOver={this.props.decrementcount}>hover {this.props.count}</h1>
        </div>;
    }
}



export default Newhover2;