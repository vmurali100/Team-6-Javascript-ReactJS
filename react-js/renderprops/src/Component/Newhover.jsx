import React from 'react';


class Newhover extends React.Component {


    render() {
        return <div>
            <h1 onMouseOver={this.props.incrementcount}>{this.props.count}</h1>
        </div>;
    }
}



export default Newhover;



