import React, { Component } from 'react';
import Todclastab from './Todclastab';
import axios from 'axios'

class Todclas extends Component {
constructor(props) {
    super(props);

    this.state = {
        todos:[]
    };
}
componentDidMount(){
    const url="http://localhost:3000/todos"
    axios.get(url).then((response)=>{this.setState({todos:response.data})})
}

    render() {
        return <div>
            <Todclastab altod={this.state.todos}/>
        </div>;
    }
}


export default Todclas;