import React from 'react';

class Counter3 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        count:0
    };
}
incrementcount=()=>{
    this.setState({count:this.state.count+1})
}
    render() {
        return <div>
           {this.props.render(this.state.count,this.incrementcount)}
        </div>;
    }
}



export default Counter3;