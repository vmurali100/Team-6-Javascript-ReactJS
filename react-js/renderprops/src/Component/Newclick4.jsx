import React from 'react';

class Newclick4 extends React.Component {


    render() {
        return <div>
            <p>Newclick4</p>
            <h1 onClick={this.props.incrementcount}> click {this.props.count}</h1>
        </div>;
    }
}



export default Newclick4;