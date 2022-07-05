import React from 'react';

class Newhover3 extends React.Component {


    render() {
        return <div>
            <p>Newhover3</p>
            <h2 onMouseOver={this.props.incrementcount}>hover {this.props.count}</h2>
        </div>;
    }
}



export default Newhover3;