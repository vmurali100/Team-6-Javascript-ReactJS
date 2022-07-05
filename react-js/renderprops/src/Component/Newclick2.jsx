import React from 'react';

class Newclick2 extends React.Component {


    render() {
        return (<div>
            <p>newclick2</p>
            <h2 onClick={this.props.decrementcount}>clicked {this.props.count}</h2>
        </div>
        )
    }
}



export default Newclick2;