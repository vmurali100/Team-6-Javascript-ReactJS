import React from 'react';

class Newhover4 extends React.Component {


    render() {
        return <div>
            <p>Newhover4</p>
            <p onMouseOver={this.props.incrementcount}>hover {this.props.count}</p>
        </div>;
    }
}



export default Newhover4;