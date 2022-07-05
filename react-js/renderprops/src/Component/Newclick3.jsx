import React from 'react';

class Newclick3 extends React.Component {


    render() {
        return <div>
            <p>Newclick3</p>
            <h1 onClick={this.props.incrementcount}>click {this.props.count}</h1>
        </div>;
    }
}



export default Newclick3;