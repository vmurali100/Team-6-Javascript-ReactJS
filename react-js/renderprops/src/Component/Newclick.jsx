import React from 'react';


class Newclick extends React.Component {



    render() {
        return <div>
            <p>Newclick</p>
            <button onClick={this.incrementcount}>Increment</button>
            <h2>click {this.state.count}</h2>
        </div>;
    }
}


export default Newclick;