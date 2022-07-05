

import React from 'react';

class Newclick1 extends React.Component {

    render() {
        return <div>
            <p>Newclick1</p>
            
            <h1 onClick={this.props.incrementcount}> click {this.props.count}</h1>
        </div>;
    }
}



export default Newclick1;