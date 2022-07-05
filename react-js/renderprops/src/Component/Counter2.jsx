import React from 'react';

class Counter2 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        count:100
    };
}
decrementcount=()=>{
    this.setState({count:this.state.count-1})
}
    render() {
        return <div>
            {this.props.render(this.state.count,this.decrementcount)}
        </div>;
    }
}



export default Counter2;