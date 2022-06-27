import React, { Component } from 'react';
import axios from 'axios'


class ChildClas1 extends Component {
constructor(props) {
    super(props);

    this.state = {
        chairman:[]
    };
}
componentDidMount(){
    const url="http://localhost:3000/todos"
    axios.get(url).then((response)=>{this.setState({chairman:response.data})})
}

    render() {
        
        
        return (<div>
            
            <button onClick={()=>{this.props.receivechairman(this.state.chairman)}}>send to parent</button>
        </div>
        )
    }
}


export default ChildClas1;